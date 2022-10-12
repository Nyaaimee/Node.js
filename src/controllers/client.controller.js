import userModel from "../models/users.model.js";
import { Users } from "../modules/users.module.js"

const userController = {};

userController.getUsers = async (req,res) => {
    // Use the userModel to find users from the database
    const dbUsers = await userModel.find();
    res.send(dbUsers);

}

userController.getUserByEmail = (req,res) =>{
    const params = req.params.email;
    const User = Users.filter((User) => User.email == params);
    res.send(User[0]);
}

userController.addUser = async(req,res) =>{
    const newUser = req.body;
    newUser.createdAt = new Date(Date.now());
    newUser.isLoggedIn = true;
    
    const newDbUser = await userModel.create(newUser)

    res.status(200).send({
        status: 200,
        message: "User account successfully created",
        user: newUser
    });
    console.log("The received info is ", newUser);
}

userController.deleteUser = (req,res) => {
    const { id } = req.params;
    const UserIndex = Users.findIndex(User => User.id == id);
    Users.splice(UserIndex, 1);
    return res.send();
}

export default userController;