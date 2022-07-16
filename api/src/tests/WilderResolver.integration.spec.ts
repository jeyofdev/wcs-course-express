// import { ApolloServer } from 'apollo-server-express';
// import * as dotenv from 'dotenv';
// import getApolloServer from '../config/getAppolloServer';
// import databaseConnection, {
//   closeDatabaseConnexion,
// } from '../config/database.config';
// import { CREATE_WILDER, GET_WILDERS } from './queries';
// import wilderModel from '../models/wilder.model';
// import mongoose from 'mongoose';

// dotenv.config();

// describe('Server API apollo graphql', () => {
//   let dbConnexion: any;
//   let server: ApolloServer;

//   beforeAll(async () => {
//     if (!process.env.MONGO_URI_TEST) {
//       throw new Error('A MONGO_URI_TEST must be provided in .env');
//     }

//     server = await getApolloServer();

//     dbConnexion = databaseConnection(
//       process.env.MONGO_URI_TEST,
//       'Connected to test database MongoDB'
//     );

//     // purge database test
//     const collections = Object.keys(mongoose.connection.collections);
//     for (const collectionName of collections) {
//       const collection = mongoose.connection.collections[collectionName];
//       collection.deleteMany({});
//     }
//   });

//   afterAll(async () => {
//     closeDatabaseConnexion();
//   });

//   describe('Query wilders', () => {
//     describe('when there are no wilders in database', () => {
//       it('returns empty array', async () => {
//         const result = await server.executeOperation({
//           query: GET_WILDERS,
//         });

//         expect(result.errors).toBeUndefined();
//         expect(result?.data?.wilders).toStrictEqual([]);
//       });
//     });
//   });

//   describe('Mutation', () => {
//     it('when a wilder is created', async () => {
//       await server.executeOperation({
//         query: CREATE_WILDER,
//         variables: {
//           name: 'john',
//           city: 'Bordeaux',
//           skills: [],
//         },
//       });

//       const result = await wilderModel.findOne({ name: 'john' });

//       expect(result).toBeDefined();
//       expect(result?.id).toBeDefined();
//       expect(result).toHaveProperty('id');
//       expect(result).toHaveProperty('city', 'Bordeaux');
//       expect(result).toHaveProperty('skills', []);
//     });

//     it('when many wilder are created', async () => {
//       await server.executeOperation({
//         query: CREATE_WILDER,
//         variables: {
//           name: 'john',
//           city: 'Bordeaux',
//           skills: [],
//         },
//       });

//       await server.executeOperation({
//         query: CREATE_WILDER,
//         variables: {
//           name: 'marie',
//           city: 'Paris',
//           skills: [],
//         },
//       });

//       const resultOne = await wilderModel.findOne({ name: 'john' });

//       expect(resultOne).toBeDefined();
//       expect(resultOne?.id).toBeDefined();
//       expect(resultOne).toHaveProperty('id');
//       expect(resultOne).toHaveProperty('city', 'Bordeaux');
//       expect(resultOne).toHaveProperty('skills', []);

//       const resultTwo = await wilderModel.findOne({ name: 'marie' });

//       expect(resultTwo).toBeDefined();
//       expect(resultTwo?.id).toBeDefined();
//       expect(resultTwo).toHaveProperty('id');
//       expect(resultTwo).toHaveProperty('city', 'Paris');
//       expect(resultTwo).toHaveProperty('skills', []);
//     });
//   });
// });
