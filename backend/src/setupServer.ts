import Koa from 'koa';
import bodyParser from 'koa-bodyparser';
import koaCors from 'koa2-cors';
import dotenv from 'dotenv';

dotenv.config();
async function serverSetup() {
    const server: Koa =new Koa();
    middleware(server);
    await startServer(server);
};


function middleware(server: Koa){
    server.use(bodyParser());
    server.use(koaCors());
};

async function startServer(server: Koa) {
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