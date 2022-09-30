import express from "express";
import userController from "../controllers/client.controller.js";


// Invoke the express router function
const userRouter = express.Router()

// Get all users endpoints
userRouter.get("/users",userController.getUsers);
// get user by email
userRouter.get("/User/:email",userController.getUserByEmail);
// Add New User
userRouter.post("/User/add",userController.getUsers);
// Update user

// Delete user
userRouter.delete("/Users", userController.getUsers);


export default userRouter;
