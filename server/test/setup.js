const server = require('../index');
const supertest = require('supertest');
const requestWithSupertest = supertest(server);
const mongoose = require('../utilities/database');

beforeAll(done => {
  done()
})

afterAll(done => {
  // Closing the DB connection & server allows Jest to exit successfully.
  mongoose.connection.close()
  server.close()
  done()
})

module.exports = requestWithSupertest;