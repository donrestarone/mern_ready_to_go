const mongoose = require('mongoose');
const UserSchema = new mongoose.Schema({
  name: String,
  email: String,
  passwordHash: String,
});

const User = mongoose.model('User', UserSchema);

module.exports = User;