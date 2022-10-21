import Router from 'koa-router';

import {Post} from "./controllers/post.controller"

export function registerRoutes() {
    const router= new Router();

    //Post routes
    router.post('/api/posts/create', Post.prototype.createPost);
    router.get('/api/posts', Post.prototype.getAllPosts);
    router.get('/api/posts/:id', Post.prototype.getPost);
    router.put('/api/posts/update/:id', Post.prototype.updatePost);
    router.delete('/api/posts/delete/:id', Post.prototype.deletePost);

    return router;
}