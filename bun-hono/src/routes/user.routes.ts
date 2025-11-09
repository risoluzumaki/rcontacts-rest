import AuthMiddleware from "../middleware/auth.middleware";
import { Hono } from "hono";
import UserController from "../modules/user/user.controller";

export default function userRoutes(app: Hono, userController: UserController) {
  const userRoutes = app.basePath("/api/v1/");
  userRoutes.use("*", AuthMiddleware.authenticate);
  userRoutes.get("/users/profile", userController.profile.bind(userController));
}