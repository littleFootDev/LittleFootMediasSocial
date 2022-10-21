import { Context} from 'koa';



import {PostModel} from '../models/posts/Post.model';


export class Post {
    public async createPost (ctx: Context): Promise<void> {
        try {
            const body = ctx.request.body;
            const post = await PostModel.create(body);
            
            ctx.body = {
                message : "Post created successfully",
                post
            };
        } catch (err) {
            ctx.body = err;
        }
    }

    public async getAllPosts (ctx: Context): Promise<void> {
        try {
            const posts = await PostModel.find({}).sort({created: -1});

            ctx.body = {
                message: "All posts found",
                posts
            }
        } catch (err) {
            ctx.body = err
        }
    };
    
    public async getPost (ctx: Context): Promise<void> {
        try {
            const {id} = ctx.params;
            const post = await PostModel.findById(id);
            ctx.body = {
                message: "Post found",
                post
            }
        } catch (err) {
            ctx.body = err
        }
    };

    public async updatePost (ctx: Context): Promise<void> {
        try {
            const {id} = ctx.params;
            const updatePost = await PostModel.findByIdAndUpdate(
                {_id: id},
                {$set: ctx.request.body},
                {new: true}
                );

                ctx.body = {
                    message: "Post updated successfully",
                    updatePost
                }
        } catch (err) {
            ctx.body = err
        }
    };

    public async deletePost (ctx: Context): Promise<void> {
        try {
            const {id} = ctx.params;
            await PostModel.deleteOne({_id: id});

            ctx.body = {
                message: "Post deleted successfully"
            }
        } catch (err) {
            ctx.body = err
        }
    };
};