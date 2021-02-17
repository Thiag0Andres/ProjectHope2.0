import { Request, Response } from "express";
import knex from "../../database/connection";

import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import authConfig from "../../config/auth.json";
import HttpStatus from "http-status-codes";
import schemas from "../../config/joiSchemas";

//Get user ID and make a unique token based on a Secret key hide in /config
function generateToken(params = {}) {
  return jwt.sign(params, authConfig.secret, {
    expiresIn: 86400,
  });
}

class UsersController {
  async register(req: Request, res: Response) {
    try {
      let userBody = req.body;
      const { email, password, user_type } = userBody;

      console.log(req.body);

      // Validate request's body
      await schemas.createUserSchema.body.validateAsync(req.body);

      if (
        user_type !== "dependent" &&
        user_type !== "co-dependent" &&
        user_type !== "ex-dependent" &&
        user_type !== "specialist"
      )
        return res
          .status(HttpStatus.NOT_FOUND)
          .send({ message: "User_type not found" });

      const existUser: any = await knex("users").where("email", email).first();

      if (existUser && existUser.id) {
        return res.status(HttpStatus.CONFLICT).send({
          message: "Already registered user",
          result: {
            user_type: existUser.user_type,
            password_generated: !!existUser.password,
          },
          status: HttpStatus.CONFLICT,
        });
      }

      let payload: any = {};
      const now = new Date();

      //Hash to encrypt password in a way that if someone ever access database, won't be able to steal password
      const hash = await bcrypt.hash(password, 10);

      userBody.password = hash;
      userBody.createdAt = now;
      userBody.updatedAt = now;

      const insertedIds = await knex("users").insert(userBody);
      const user_id = insertedIds[0];

      const newuser = await knex("users").where("id", user_id).first();

      const token = `Bearer ${generateToken({
        id: newuser.id,
        email: newuser.email,
      })}`;

      newuser.auth_token = token;
      newuser.createdAt = now;
      newuser.updatedAt = now;

      payload.result = newuser;
      payload.status = HttpStatus.CREATED;

      //send email after sending response
      //await sendMail({ req, pass });

      return res.status(payload.status).send(payload);
    } catch (error) {
      console.log(error);

      if (error.details) {
        return res
          .status(HttpStatus.BAD_REQUEST)
          .send({ message: error.details[0].message });
      }

      return res.status(HttpStatus.INTERNAL_SERVER_ERROR).send({
        message: "Something went wrong, we will get back to you shortly",
        error: error,
      });
    }
  }

  async auth(req: Request, res: Response) {
    try {
      const { email, password } = req.body;
      //console.log("oi");

      // Validate request's body
      await schemas.authenticateUserSchema.body.validateAsync(req.body);

      const user: any = await knex("users").where("email", email).first();

      if (!user)
        return res
          .status(HttpStatus.NOT_FOUND)
          .send({ message: "User not found" });

      //Compare typed password with the real password stored on DB
      if (!(await bcrypt.compare(password, user.password)))
        return res
          .status(HttpStatus.BAD_REQUEST)
          .send({ message: "Wrong password" });

      //Hide password from user, then it won't be sent as response
      user.password = undefined;

      return res.json({
        user: user,
        token: `Bearer ${generateToken({ id: user.id })}`,
      });
    } catch (error) {
      console.log(error);

      if (error.details) {
        return res
          .status(HttpStatus.BAD_REQUEST)
          .send({ message: error.details[0].message });
      }

      return res.status(HttpStatus.INTERNAL_SERVER_ERROR).send({
        message: "Something went wrong, we will get back to you shortly",
        error: error,
      });
    }
  }

  async index(req: Request, res: Response) {
    try {
      let users = await knex("users");

      return res.json(users);
    } catch (error) {
      console.log(error);
      return res.status(HttpStatus.INTERNAL_SERVER_ERROR).send({
        message: "Something went wrong, we will get back to you shortly",
        error: error,
      });
    }
  }

  async show(req: Request, res: Response) {
    try {
      const { id } = req.params;

      const user = await knex("users").where("id", id).first();

      if (!user) {
        return res
          .status(HttpStatus.BAD_REQUEST)
          .json({ message: "User not found." });
      }

      return res.json(user);
    } catch (error) {
      console.log(error);
      return res.status(HttpStatus.INTERNAL_SERVER_ERROR).send({
        message: "Something went wrong, we will get back to you shortly",
        error: error,
      });
    }
  }

  async update(req: Request, res: Response) {
    try {
      const { password } = req.body;
      const { id } = req.params;

      // Validate request's body
      await schemas.updateUserSchema.body.validateAsync(req.body);

      let user = await knex("users").where("id", id).first();

      if (!user) {
        return res
          .status(HttpStatus.BAD_REQUEST)
          .json({ message: "User not found." });
      }

      user = {
        ...user,
        ...req.body,
      };

      if (password) {
        // Hash to encrypt password in a way that if someone ever access database, won't be able to steal password
        const hash = await bcrypt.hash(password, 10);
        user.password = hash;
      }

      const now = new Date();
      user.updatedAt = now;

      await knex("users").where("id", id).update(user);

      return res.json(user);
    } catch (error) {
      console.log(error);

      if (error.details) {
        return res
          .status(HttpStatus.BAD_REQUEST)
          .send({ message: error.details[0].message });
      }

      return res.status(HttpStatus.INTERNAL_SERVER_ERROR).send({
        message: "Something went wrong, we will get back to you shortly",
        error: error,
      });
    }
  }

  async destroy(req: Request, res: Response) {
    try {
      const { id } = req.params;

      const user = await knex("users").where("id", id).first();

      if (!user) {
        return res
          .status(HttpStatus.NOT_FOUND)
          .json({ error: "User not found" });
      }

      await knex("users").where("id", id).delete();

      return res.json({
        usersDeleted: user,
      });
    } catch (error) {
      console.log(error);
      return res.status(HttpStatus.INTERNAL_SERVER_ERROR).send({
        message: "Something went wrong, we will get back to you shortly",
        error: error,
      });
    }
  }
}

export default new UsersController();
