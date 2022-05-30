import * as mongoose from 'mongoose';
import * as dotenv from 'dotenv';

dotenv.config();
const { MONGO_URI } = process.env;

/**
 * Connect to mongoDB
 */
const ConnectDb = async (
  success: string,
  options?: mongoose.ConnectOptions | undefined
) => {
  if (!MONGO_URI) {
    throw new Error('A MONGO_URL must be provided in .env');
  }

  try {
    await mongoose.connect(MONGO_URI, options);
    console.log(success);
  } catch (err) {
    console.log(err);
  }
};

export default ConnectDb;
