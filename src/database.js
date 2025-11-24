const mongoose = require('mongoose');

const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://128.24.43.145:27017/Cloudbeds';

const connectDB = async () => {
  try {
    await mongoose.connect(MONGODB_URI);
    console.log('Connected to MongoDB');
  } catch (error) {
    console.error('MongoDB connection error', error);
    process.exit(1);
  }
};

module.exports = { connectDB, mongoose };
