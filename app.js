// Using Import (ES6)
import { users, Users } from "./src/modules/users.module.js";
import Posts from "./src/modules/post.module.js";

console.log('These are the users of the system => ', Users);
console.log('These are the posts in the system => ', Posts);
// Import express
import express, { response } from "express";
const PORT = 3000;
// We create the express app by invoking the express function.
const app = express(); 

// Register the the express json middleware
app.use(express.json());


// Get all users endpoints
app.get("/users",(request,response) =>{
    // To send a response;
    response.send(Users);
    // When we want to send a response to the frontend we do response.send() .json.
})

app.get("/User/:email", (req,res) =>{
    const params = req.params.email;
    const User = Users.filter((User) => User.email == params);
    res.send(User[0]);
})

// Get all post endpoints
app.get("/posts", (request,response) =>{
    response.send(Posts);
})

// Add New User
app.post("/User/add", (req,res) => {
    const newUser = req.body;
    newUser.createdAt = new Date(Date.now());
    newUser.isLoggedIn = true;
    users.push(newUser);

    res.status(200).send({
        status: 200,
        message: "User account successfully created",
        user: newUser
    });
    console.log("The received info is ", newUser);
})



// Start listening for requests using express server
app.listen(PORT, () =>{
    console.log("Backend running on port ", PORT);
})

