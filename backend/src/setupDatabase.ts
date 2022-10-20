import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

async function databaseSetup() {
    const connected: boolean = await connectedToDatabase();
    if(!connected) {
        process.exit(1);
    }
};

async function connectedToDatabase():Promise<boolean> {
    try {
        const DB = process.env.DATABASE?.replace(
            '<PASSWORD>',
            process.env.DB_PASSWORD!
        );
        await mongoose.connect(DB!);
        console.log("connected to database");
        return true;
        
    } catch (err) {
        console.log("Error while connecting to database : " + err);
        return false;
    }
};

export {databaseSetup}