const mongoose = require('mongoose');
const { Schema } = mongoose;

const UserSchema = new Schema({
  auth_id: String,
  email: String,
  name: String,
});

module.exports = mongoose.model('user', UserSchema);
