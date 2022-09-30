import express from "express";
import postsController from "../controllers/post.controller.js";

const postsRouter = express.Router();

// Get all posts
postsRouter.get("/", postsController.getPosts);
// Add posts
postsRouter.post("/add", postsController.addPosts);
// Update posts
postsRouter.put("/", postsController.updatePosts),
// Delete posts
postsRouter.delete("/", postsController.deletePosts);


export default postsRouter;