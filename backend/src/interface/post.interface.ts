import mongoose from "mongoose";

export interface IPost extends mongoose.Document {
    title: string;
    content: string;
    likers?: string[];
    imagePath?:string;
}