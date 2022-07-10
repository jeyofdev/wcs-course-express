import { ApolloServer } from 'apollo-server-express';
import { buildSchema } from 'type-graphql';
import { Container } from 'typedi';

const getApolloServer = async () => {
  const schema = await buildSchema({
    resolvers: [`${process.cwd()}/src/**/*.resolver.{ts,js}`],
    container: Container,
  });

  const apolloServer = await new ApolloServer({ schema });
  return apolloServer;
};

export default getApolloServer;
