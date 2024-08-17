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
    console.log('Connected to MongoDB');
  })
  .catch((error) => {
    console.error('Error connecting to MongoDB:', error);
  });

mongoose.connection.listDatabases().then((databases) => {
  console.log(databases)
})

// testing user model:
const userFromDb = User.findOne({ name: 'Foo' }).then (user => {
  console.log(user, 'loaded user')
})

app.use(cors())
app.use(express.json());
app.use('/', userRoutes);

app.get('/', (req, res) => {
  res.send('MERN RTG: Hello World!')
})

app.listen(port, () => {
  console.log(`MERN RTG listening on port ${port}`)
})