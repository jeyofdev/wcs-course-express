import express from 'express';
import dotenv from 'dotenv';

dotenv.config();

const PORT = process.env.PORT || 3000;

const server = express();

server.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
