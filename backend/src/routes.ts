import express, { Request, Response } from "express";
import cors from "cors";

// Importing controllers
import usersController from "./app/controllers/usersController";

// Importing middlewares
import authMiddleware from "./app/middlewares/auth";

const routes = express.Router();

routes.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

routes.options("*", cors());

// Default route that contains application info
routes.get("/", (req: Request, res: Response) => {
  res.json({
    App: "Project Hope API",
    Status: "Development",
  });
});

// Authentication
routes.post("/users/register", usersController.register);
routes.post("/users/authenticate", usersController.auth);

routes.use(authMiddleware);

/// Users
routes.get("/users/", usersController.index);
routes.get("/users/:id", usersController.show);
routes.put("/users/update/:id", usersController.update);
routes.delete("/users/delete/:id", usersController.destroy);

export default routes;
