// import { ApolloServer } from 'apollo-server-express';
import * as dotenv from 'dotenv';
import databaseConnection from '../config/database.config';

dotenv.config();

describe('Server API apollo graphql', () => {
  // let server: ApolloServer;

  beforeAll(() => {
    if (!process.env.MONGO_URI_TEST) {
      throw new Error('A MONGO_URI_TEST must be provided in .env');
    }

    databaseConnection(
      process.env.MONGO_URI_TEST,
      'Connected to test database MongoDB'
    );
  });

  describe('init test', () => {
    it('adds 1 + 2 to equal 3', () => {
      expect(1 + 2).toBe(3);
    });
  });
});
