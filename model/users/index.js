const { Schema, model } = require('mongoose');

const usersSchema = new Schema({
  email: String,
  password: String,
});

module.exports = model('users', usersSchema);
