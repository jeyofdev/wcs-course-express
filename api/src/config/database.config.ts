import mongoose from 'mongoose';
import { ConnectDatabaseType } from '../types/config';

const connectDb: ConnectDatabaseType = async (url, dbConnectOptions) => {
  try {
    await mongoose.connect(url, dbConnectOptions);
    console.log('Connected to database MongoDB');
  } catch (err) {
    console.log((err as Error).message);
  }
};

export default connectDb;
