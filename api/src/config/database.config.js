import mongoose from 'mongoose';

const connectDb = async (url, dbConnectOptions) => {
    try {
        await mongoose.connect(url, dbConnectOptions);
        console.log('Connected to database MongoDB');
    } catch (err) {
        console.log(err.message);
    }
};

export default connectDb;
