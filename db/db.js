import mongoose from "mongoose";
export  const connectDb=()=>{
    mongoose.connect(process.env.Mongodb_url,({dbName:"tinyclo"})).then(()=>{
        console.log("db connected");
    }).catch((e)=>{
        console.log(e);
    })
}