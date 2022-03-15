import express, { Request, Response } from 'express';
import dotenv from 'dotenv';
import connectDb from './config/database.config';
import routes from './routes';
import { IdatabaseConnectOptions } from './interfaces/config';

dotenv.config();

// Env
const PORT: string | number = process.env.PORT || 3000;
const MONGO_URI: string | undefined = process.env.MONGO_URI;

// Express
const server = express();
server.use(express.urlencoded({ extended: true }));
server.use(express.json());

// Database connect
const dbConnectOptions: IdatabaseConnectOptions = { autoIndex: true };

if (!MONGO_URI) {
    throw Error('A MONGO_URL must be provided in environment.');
}
connectDb(MONGO_URI, dbConnectOptions);

// Routes
server.use('/api', routes);

server.use((_: Request, res: Response) => {
    res.status(404).json({ message: 'Route 404' });
});

server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
