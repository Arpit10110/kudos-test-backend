import mongoose from "mongoose";
const Schema = new mongoose.Schema({
    email:{
        type: String,
        required: true
    },
    password:{
        type: String,
        required: true
    }
})

export const UserModel= mongoose.model("User",Schema)