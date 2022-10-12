import express from "express";
import userController from "../controllers/client.controller.js";


// Invoke the express router function
const userRouter = express.Router()

// Get all users endpoints
userRouter.get("/",userController.getUsers);
// get user by email
userRouter.get("/User/:email",userController.getUserByEmail);
// Add New User
userRouter.post("/addUser",userController.addUser);
// Update user

// Delete user
userRouter.delete("/Users", userController.deleteUser);


export default userRouter;
