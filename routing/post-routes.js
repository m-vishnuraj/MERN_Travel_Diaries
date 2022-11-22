import { Router } from "express";
import {
  addPost,
  getAllPost,
  getPostById,
} from "../controllers/post-controller";

const postRouter = Router();

postRouter.get("/", getAllPost);
postRouter.get("/:id", getPostById);
postRouter.post("/", addPost);

export default postRouter;
