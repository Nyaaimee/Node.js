import express from "express";
import likesController from "../controllers/like.controller.js";

const likesRouter = express.Router();

// get likes
likesRouter.get("/", likesController.getLikes);
// delete like

export default likesRouter