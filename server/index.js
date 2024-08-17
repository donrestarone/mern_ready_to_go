const logger = require('./utilities/logger')
const express = require('express')
const cors = require('cors'); 
const userRoutes = require('./routes/userRoutes')
const app = express()
const port = process.env.PORT || 3333
const mongoose = require('mongoose');
const dbUrl = `mongodb+srv://${process.env.MONGODB_USER_NAME}:${process.env.MONGODB_USER_PASSWORD}@${process.env.MONGODB_DATABASE_ENDPOINT}/?retryWrites=true&w=majority&appName=${process.env.MONGODB_DATABASE_NAME}`

const User = require('./models/user')

mongoose.connect(dbUrl)
  .then(() => {
    logger.info('Connected to MongoDB');
  })
  .catch((error) => {
    console.error('Error connecting to MongoDB:', error);
  });

mongoose.connection.listDatabases().then((databases) => {
  logger.info('available databases', databases);
})

app.use(cors())
app.use(express.json());
app.use('/', userRoutes);

app.get('/', (req, res) => {
  res.send('MERN RTG: Hello World!')
})

app.listen(port, () => {
  logger.info(`MERN RTG listening on port ${port}`);
})