import { ApolloServer } from 'apollo-server-express';
import * as dotenv from 'dotenv';
import { getConnection } from 'typeorm';
import getApolloServer from '../config/getAppolloServer';
import databaseConnection from '../config/database.config';
import {
  CREATE_WILDER,
  GET_WILDERS,
  REMOVE_WILDER,
  UPDATE_WILDER,
} from './queries';

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

      expect(result.errors).toBeUndefined();
      expect(result.data?.postWilder).toBeDefined();
      expect(result.data?.postWilder?.id).toBeDefined();
      expect(result.data?.postWilder).toHaveProperty('id');
      expect(result.data?.postWilder).toHaveProperty('city', 'Bordeaux');
      expect(result.data?.postWilder).toHaveProperty('skills', []);

      expect(result.data?.postWilder).toMatchInlineSnapshot(`
        Object {
          "city": "Bordeaux",
          "id": "1",
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

    it('when a wilder is removed', async () => {
      const postResult = await server.executeOperation({
        query: CREATE_WILDER,
        variables: {
          name: 'john',
          city: 'Bordeaux',
          skills: [],
        },
      });

      expect(postResult.data?.postWilder).toMatchInlineSnapshot(`
        Object {
          "city": "Bordeaux",
          "id": "1",
          "name": "john",
          "skills": Array [],
        }
      `);

      const removeResult = await server.executeOperation({
        query: REMOVE_WILDER,
        variables: {
          id: '1',
        },
      });

      expect(removeResult.data?.removeWilder).toMatchInlineSnapshot(`
        Object {
          "city": "Bordeaux",
          "id": "1",
          "name": "john",
          "skills": Array [],
        }
      `);

      const result = await server.executeOperation({
        query: GET_WILDERS,
      });

      expect(result.errors).toBeUndefined();
      expect(result?.data?.wilders).toStrictEqual([]);
    });
  });
});
