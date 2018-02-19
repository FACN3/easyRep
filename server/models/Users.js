const mongoose = require('mongoose');
const { Schema } = mongoose;

const UserSchema = new Schema({
  strategy: String,
  auth_id: String,
  name: String
});

module.exports = mongoose.model('user', UserSchema);
