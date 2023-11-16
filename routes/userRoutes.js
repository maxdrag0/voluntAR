import { Router } from "express";
import UserController from "../controller/userController.js";
import { validatetoken } from "../midlewares/validateToken.js";

const usersRoutes = Router();
const userController = new UserController();

usersRoutes.post("", userController.createUser);
usersRoutes.post("/login", userController.login);

usersRoutes.use(validatetoken)

usersRoutes.get("/me",validatetoken, userController.me);
usersRoutes.get("", userController.getAllUsers);
usersRoutes.get("/:id", userController.getUserById);

// usersRoutes.put("/:id", userController.updateUser);

usersRoutes.delete("/:id", userController.deleteUser);

export default usersRoutes;