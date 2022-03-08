import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import connectDb from './config/database.config';

dotenv.config();

// Env
const PORT = process.env.PORT || 3000;
const MONGO_URI = process.env.MONGO_URI;

// Express
const server = express();

// Database connect
const dbConnectOptions = { autoIndex: true };
connectDb(MONGO_URI, dbConnectOptions);

server.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
