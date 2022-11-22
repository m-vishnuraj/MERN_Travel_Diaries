import { Router } from "express";
import {
  addPost,
  deletePost,
  getAllPost,
  getPostById,
  updatePost,
} from "../controllers/post-controller";

const postRouter = Router();

postRouter.get("/", getAllPost);
postRouter.get("/:id", getPostById);
postRouter.post("/", addPost);
postRouter.put("/:id", updatePost);
postRouter.delete("/:id", deletePost);

export default postRouter;
