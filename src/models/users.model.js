import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    age: {
        type: Number,
        required: false
    },
    gender: {
        type: String,
        required: false
    },
    email: {
        type: String,
        required: true,
        unique: true
    }
});

const userModel = mongoose.model('users',userSchema);

export default userModel;