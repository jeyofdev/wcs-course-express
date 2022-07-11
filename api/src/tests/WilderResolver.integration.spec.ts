import { ApolloServer } from 'apollo-server-express';
import * as dotenv from 'dotenv';
import getApolloServer from '../config/getAppolloServer';
import databaseConnection, {
  closeDatabaseConnexion,
} from '../config/database.config';
import { CREATE_WILDER, GET_WILDERS, UPDATE_WILDER } from './queries';
import wilderModel from '../models/wilder.model';
import mongoose from 'mongoose';

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

    // purge database test
    const collections = Object.keys(mongoose.connection.collections);
    for (const collectionName of collections) {
      const collection = mongoose.connection.collections[collectionName];
      collection.deleteMany({});
    }
  });

  afterAll(async () => {
    closeDatabaseConnexion();
  });

  describe('Query wilders', () => {
    describe('when there are no wilders in database', () => {
      it('returns empty array', async () => {
        const result = await server.executeOperation({
          query: GET_WILDERS,
        });

        expect(result.errors).toBeUndefined();
        expect(result?.data?.wilders).toStrictEqual([]);
      });
    });
  });

  describe('Mutation', () => {
    it('Create wilder', async () => {
      await server.executeOperation({
        query: CREATE_WILDER,
        variables: {
          name: 'john',
          city: 'Bordeaux',
          skills: [],
        },
      });

      const result = await wilderModel.findOne({ name: 'john' });

      expect(result).toBeDefined();
      expect(result?._id).toBeDefined();
      expect(result).toHaveProperty('_id');
      expect(result).toHaveProperty('city', 'Bordeaux');
      expect(result).toHaveProperty('skills', []);
    });
  });
});
