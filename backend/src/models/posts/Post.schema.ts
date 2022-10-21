import mongoose from 'mongoose';

import {IPost} from '../../interface/post.interface';

const postSchema : mongoose.Schema<IPost> = new mongoose.Schema({
    title : {
        type: String,
        required: true
    },
    content: { 
        type: String,
        required: true
    },
    imagePath: {
        type: String,
    },
    likers: {
        types : [String]
    }
}, {
    timestamps : true
}
);

export {postSchema}

