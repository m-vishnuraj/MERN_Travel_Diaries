import { Router } from "express";
import { getAllUsers, signUp } from "../controllers/user-controller";

const userRouter = Router();

userRouter.get("/", getAllUsers);
userRouter.post("/signup", signUp);

export default userRouter;
