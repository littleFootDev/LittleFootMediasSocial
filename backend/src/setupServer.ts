import koa from 'koa';

import koaCors from 'koa2-cors';
import dotenv from 'dotenv';
import koaBody from 'koa-body';

import { registerRoutes } from "./routes";

dotenv.config();
async function serverSetup() {
    const server: koa =new koa();
    middleware(server);
    await startServer(server);
};


function middleware(server: koa){

    server.use(koaCors());
    server.use(koaBody());
    const routes = registerRoutes().routes();

    server.use(routes);
};

async function startServer(server: koa) {
    try {
        const port = process.env.PORT;
        const serverSarted : Promise<void> = new Promise<void>((resolve,) => {
        server.listen(port, resolve);
        console.log(`Server is running on port : ${port}`);
    });
    await serverSarted;
    } catch (err) {
        console.log(err);
        return err;    
    }
};

export {serverSetup};