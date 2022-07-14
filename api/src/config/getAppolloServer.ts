import { ApolloServer } from 'apollo-server-express';
import { buildSchema } from 'type-graphql';
import { Container } from 'typedi';
import WilderResolver from '../resolvers/wilder.resolver';

const getApolloServer = async () => {
  const schema = await buildSchema({
    resolvers: [WilderResolver],
    container: Container,
  });

  const apolloServer = new ApolloServer({ schema });
  return apolloServer;
};

export default getApolloServer;
