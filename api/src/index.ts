import 'reflect-metadata';
import { ApolloServer } from 'apollo-server-express';
import * as Express from 'express';
import { buildSchema } from 'type-graphql';
import * as dotenv from 'dotenv';
import { Container } from 'typedi';
import databaseConnection from './config/database.config';

dotenv.config();
const { PORT } = process.env;

// Connect MongoDB
if (!process.env.MONGO_URI) {
  throw new Error('A MONGO_URI must be provided in .env');
}
databaseConnection(process.env.MONGO_URI, 'Connected to database MongoDB');

// Server
const serverStart = async () => {
  const schema = await buildSchema({
    resolvers: [`${__dirname}/**/*.resolver.{ts,js}`],
    container: Container,
  });

  const apolloServer = await new ApolloServer({ schema });
  apolloServer.start().then(() => {
    const app = Express();
    apolloServer.applyMiddleware({ app });

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
