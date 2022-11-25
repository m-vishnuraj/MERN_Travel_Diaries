import { Router } from "express";
import {
  getAllUsers,
  getUserById,
  login,
  signUp,
} from "../controllers/user-controller";

const userRouter = Router();

userRouter.get("/", getAllUsers);
userRouter.get("/:id", getUserById);
userRouter.post("/signup", signUp);
userRouter.post("/login", login);

export default userRouter;
