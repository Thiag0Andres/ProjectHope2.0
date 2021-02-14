import express, { Request, Response } from "express";

// Importing controllers
import usersController from "./app/controllers/usersController";

const routes = express.Router();

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

export default routes;
