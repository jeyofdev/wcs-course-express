import 'reflect-metadata';
import * as Express from 'express';
import * as dotenv from 'dotenv';
import databaseConnection from './config/database.config';
import getApolloServer from './config/getAppolloServer';

dotenv.config();
const { PORT } = process.env;

// Connect MongoDB
if (!process.env.MONGO_URI) {
  throw new Error('A MONGO_URI must be provided in .env');
}
databaseConnection(process.env.MONGO_URI, 'Connected to database MongoDB');

// Server
const serverStart = async () => {
  const server = await getApolloServer();
  server.start().then(() => {
    const app = Express();
    server.applyMiddleware({ app });

    app.listen(PORT, () => {
      try {
        console.log(`app listening at http://localhost:${PORT}/graphql`);
      } catch (err) {
        throw new Error('Something bad happened...');
      }
    });
  });
};

serverStart();
