import { Router } from "express";
import { addPost, getAllPost } from "../controllers/post-controller";

const postRouter = Router();

postRouter.get("/", getAllPost);
postRouter.post("/", addPost);

export default postRouter;
