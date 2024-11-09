import mongoose from "mongoose";
const Schema = new mongoose.Schema({
    title:{
        type: String,
        required: true
    },
    desc:{
        type: String,
        required: true
    },
    date:{
        type: String,
        required: true
    }
})

export const BlogModel= mongoose.model("Blog",Schema)