import mongoose from 'mongoose';
import config from '../config';

const connectToDatabase = async (): Promise<void> => {
    await mongoose.connect(config.databaseConnectionString);
    console.log('Connected to database!');
};

export default connectToDatabase;
