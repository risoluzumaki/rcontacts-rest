import { Hono } from "hono";
import UserController from "../modules/user/user.controller";

export default function authRoutes (app: Hono, userController: UserController){
  const authRoutes = app.basePath("/api/v1/auth")

  // Public routes
  authRoutes.post("/register", userController.register.bind(userController))
  authRoutes.post("/login", userController.login.bind(userController))

}