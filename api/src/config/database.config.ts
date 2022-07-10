import mongoose from 'mongoose';

/**
 * Connect to mongoDB
 */
const ConnectDb = (
  uri: string,
  success: string,
  options?: mongoose.ConnectOptions | undefined
) => {
  try {
    mongoose.connect(uri, options);
    console.log(success);
  } catch (err) {
    console.log(err);
  }
};

const databaseConnection = (url: string, success: string) => {
  // Connect MongoDB
  const connectOptions = { autoIndex: true };
  ConnectDb(url, success, connectOptions);
};

export const closeDatabaseConnexion = () => {
  mongoose.connection.close();
};

export default databaseConnection;
