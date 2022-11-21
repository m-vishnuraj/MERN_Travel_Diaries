import { Router } from "express";
import { getAllPost } from "../controllers/post-controller";

const postRouter = Router();

postRouter.get("/", getAllPost);

export default postRouter;
