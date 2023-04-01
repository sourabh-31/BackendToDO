import mongoose from "mongoose";

export const connectDB = ()=> {
    mongoose.connect(`${process.env.MONGO_URI}/NodeApi`).then(()=> {
    console.log("connected to mongodb")
 }).catch((err)=> {
    console.log(err)
 });

}