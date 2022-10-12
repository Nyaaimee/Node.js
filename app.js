// Using Import (ES6)
import { users, Users } from "./src/modules/users.module.js";
// import {Posts} from "./src/modules/post.module.js";
import userRouter from "./src/router/user.routes.js";
import postsRouter from "./src/router/post.routes.js"
import commentsRouter from "./src/router/comments.route.js";
import likeRouter from "./src/router/like.route.js"
import db from "./src/config/db.js";


// Import express
import express, { response } from "express";
// We set our PORT to 3000
const PORT = 3000;

// We create the express app by invoking the express function.
const app = express(); 
// When we want to send a response to the frontend we do response.send() .json.

// Register the express json middleware
app.use(express.json());  // Used to parse the request body if absent 

// This is our first official route listener
app.use('/users', userRouter) 
app.use('/posts', postsRouter)
app.use('/comments', commentsRouter)
app.use('/like', likeRouter)

// Update User
userRouter.put("/Users/:id", (req,res) => {
    if (req.user.role === 'User') {
     const { id, ...newUser } = req.body;
     User.findUpdate({ _id: id }, {$set: newUser});
    } 
 })
 


// Start listening for requests using express server
app.listen(PORT, async() =>{
    console.log("Backend running on port ", PORT);
    await db()
})
