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
      const { defaultEmail, password, user_type } = userBody;

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

      const existUser: any = await knex("users")
        .where("defaultEmail", defaultEmail)
        .first();

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
        email: newuser.defaultEmail,
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
}

export default new UsersController();
