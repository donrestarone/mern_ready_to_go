const logger = require('./utilities/logger')
const express = require('express')
const cors = require('cors'); 
const userRoutes = require('./routes/userRoutes')
const app = express()
const port = process.env.PORT || 3333
const mongoose = require('./utilities/database');
app.use(cors())
app.use(express.json());
app.use('/', userRoutes);

app.get('/', (req, res) => {
  res.send('MERN RTG: Hello World!')
})

server = app.listen(port, () => {
  logger.info(`MERN RTG listening on port ${port}`);
})

module.exports = server