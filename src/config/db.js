import mongoose from "mongoose";

const db = async() =>{
    await mongoose.connect('mongodb://localhost:27017/register', ()=>{
        console.log("successfully connected to the database");
    });
} 

export default db;
