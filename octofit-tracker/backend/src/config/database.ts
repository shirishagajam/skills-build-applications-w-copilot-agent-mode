import mongoose from 'mongoose';

const connectionString = process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/octofit_db';
const db = mongoose.connection;

const connectToDatabase = async (retryCount = 5): Promise<void> => {
  try {
    await mongoose.connect(connectionString);
    console.log('Connected to octofit_db');
  } catch (error) {
    if (retryCount > 0) {
      console.warn(`MongoDB unavailable, retrying (${retryCount} attempts left)...`);
      setTimeout(() => {
        void connectToDatabase(retryCount - 1);
      }, 3000);
    } else {
      console.error('Error connecting to octofit_db:', error);
    }
  }
};

db.on('error', console.error.bind(console, 'connection error:'));

connectToDatabase();

export default db;
