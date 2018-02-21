const mongoose = require('mongoose');
const { Schema } = mongoose;

const reportsSchema = new Schema({
  report_type: String,
  location: String,
  effects: String,
  imageUrl: String,
  user_id: String,
});

module.exports = mongoose.model('report', reportsSchema);
