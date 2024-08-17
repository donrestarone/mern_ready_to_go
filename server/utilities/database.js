const logger = require('../utilities/logger')

const dbUrl = `mongodb+srv://${process.env.MONGODB_USER_NAME}:${process.env.MONGODB_USER_PASSWORD}@${process.env.MONGODB_DATABASE_ENDPOINT}/?retryWrites=true&w=majority&appName=${process.env.MONGODB_DATABASE_NAME}`
const mongoose = require('mongoose');

mongoose.connect(dbUrl)
  .then(() => {
    logger.info('Connected to MongoDB');
  })
  .catch((error) => {
    console.error('Error connecting to MongoDB:', error);
  })
module.exports = mongoose;