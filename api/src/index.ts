import 'reflect-metadata';
import { ApolloServer } from 'apollo-server-express';
import * as Express from 'express';
import { buildSchema } from 'type-graphql';
import * as dotenv from 'dotenv';
import WilderResolver from './resolvers/wilder.resolver';
import ConnectDb from './config/database.config';

dotenv.config();
const { PORT } = process.env;

// Connect MongoDB
const connectOptions = { autoIndex: true };
ConnectDb('Connected to database MongoDB', connectOptions);

// Server
const serverStart = async () => {
  const schema = await buildSchema({
    resolvers: [WilderResolver],
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
