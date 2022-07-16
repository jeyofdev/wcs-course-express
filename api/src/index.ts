import 'reflect-metadata';
import * as Express from 'express';
import * as dotenv from 'dotenv';
import databaseConnection from './config/database.config';
import getApolloServer from './config/getAppolloServer';

dotenv.config();
const { PORT } = process.env;

if (!process.env.DATABASE_URL) {
  throw new Error('DATABASE_URL must be set in environment');
}
databaseConnection(
  process.env.DATABASE_URL,
  'Connected to database postgres',
  true
);

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
