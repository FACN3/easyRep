const mongoose = require('mongoose');
const { Schema } = mongoose;

const reportsShema = new Schema({
  report_type: String,
  location: String,
  effects: String,
  picture: { data: Buffer, contentType: String },
  user_id: String,
});

module.exports = mongoose.model('report', reportsShema);
