import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import connectDb from './config/database.config';
import routes from './routes';

dotenv.config();

// Env
const PORT = process.env.PORT || 3000;
const MONGO_URI = process.env.MONGO_URI;

// Express
const server = express();
server.use(express.urlencoded({ extended: true }));
server.use(express.json());

// Database connect
const dbConnectOptions = { autoIndex: true };
connectDb(MONGO_URI, dbConnectOptions);

// Routes
server.use('/api', routes);

server.use((req, res) => {
    res.status(404).json({ message: 'Route 404' });
});

server.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
