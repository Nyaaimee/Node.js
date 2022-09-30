import express from "express";
import commentsController from "../controllers/comments.controller.js";

const commentsRouter = express.Router();

// get all comment
commentsRouter.get("/", commentsController.getComments);
// add comments
commentsRouter.post("/add", commentsController.addComments);
// delete comment
commentsRouter.delete("/", commentsController.deleteComments)

export default commentsRouter;