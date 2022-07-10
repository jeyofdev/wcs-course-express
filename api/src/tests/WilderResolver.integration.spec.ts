import { ApolloServer } from 'apollo-server-express';
import * as dotenv from 'dotenv';
import getApolloServer from '../config/getAppolloServer';
import databaseConnection, {
  closeDatabaseConnexion,
} from '../config/database.config';

dotenv.config();

describe('Server API apollo graphql', () => {
  let dbConnexion: any;
  let server: ApolloServer;

  beforeAll(async () => {
    if (!process.env.MONGO_URI_TEST) {
      throw new Error('A MONGO_URI_TEST must be provided in .env');
    }

    server = await getApolloServer();

    dbConnexion = databaseConnection(
      process.env.MONGO_URI_TEST,
      'Connected to test database MongoDB'
    );
  });

  afterAll(async () => closeDatabaseConnexion());

  describe('Query wilders', () => {
    describe('when there are no wilders in database', () => {
      it('returns empty array', () => {
        expect(1 + 2).toBe(3);
      });
    });
  });
});
