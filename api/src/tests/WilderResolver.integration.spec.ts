import { ApolloServer } from 'apollo-server-express';
import * as dotenv from 'dotenv';
import { getConnection } from 'typeorm';
import getApolloServer from '../config/getAppolloServer';
import databaseConnection from '../config/database.config';
import { CREATE_WILDER, GET_WILDERS } from './queries';
import wilderModel from '../models/wilder.model';

dotenv.config();

describe('Server API apollo graphql', () => {
  let server: ApolloServer;

  beforeAll(async () => {
    if (!process.env.DATABASE_URL_TEST) {
      throw new Error('DATABASE_URL must be set in environment');
    }

    server = await getApolloServer();

    return databaseConnection(process.env.DATABASE_URL_TEST);
  });

  beforeEach(async () => {
    const entities = getConnection().entityMetadatas;

    // purge database test
    for (const entity of entities) {
      const repository = getConnection().getRepository(entity.name);
      // await repository.clear();
      await repository.query(
        `TRUNCATE ${entity.tableName} RESTART IDENTITY CASCADE`
      );
    }
  });

  afterAll(async () => getConnection().close());

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
    it('when a wilder is created', async () => {
      const result = await server.executeOperation({
        query: CREATE_WILDER,
        variables: {
          name: 'john',
          city: 'Bordeaux',
          skills: [],
        },
      });

      const wilder = await wilderModel.findOne({ name: 'john' });

      expect(wilder).toBeDefined();
      expect(wilder?.id).toBeDefined();
      expect(wilder).toHaveProperty('id');
      expect(wilder).toHaveProperty('city', 'Bordeaux');

      expect(wilder).toMatchInlineSnapshot(`
        Wilder {
          "city": "Bordeaux",
          "id": 1,
          "name": "john",
          "skills": undefined,
        }
      `);

      expect(result.errors).toBeUndefined();
      expect(result.data?.postWilder).toHaveProperty('skills', []);

      expect(result.data?.postWilder).toMatchInlineSnapshot(`
        Object {
          "city": "Bordeaux",
          "name": "john",
          "skills": Array [],
        }
      `);
    });

    it('when many wilder are created', async () => {
      await server.executeOperation({
        query: CREATE_WILDER,
        variables: {
          name: 'john',
          city: 'Bordeaux',
          skills: [],
        },
      });

      await server.executeOperation({
        query: CREATE_WILDER,
        variables: {
          name: 'marie',
          city: 'Paris',
          skills: [],
        },
      });

      const result = await server.executeOperation({
        query: GET_WILDERS,
      });

      expect(result.errors).toBeUndefined();
      expect(result?.data?.wilders).not.toStrictEqual([]);
      expect(result.data?.wilders).toMatchInlineSnapshot(`
        Array [
          Object {
            "city": "Paris",
            "id": "2",
            "name": "marie",
            "skills": Array [],
          },
          Object {
            "city": "Bordeaux",
            "id": "1",
            "name": "john",
            "skills": Array [],
          },
        ]
      `);
    });
  });
});
