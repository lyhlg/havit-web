const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const hospitalAdminSchema = new Schema({
  code: String,
  name : String,
  loc: String,
  createdOn: { type: Date, default: Date.now }
});

module.exports = mongoose.model('hospitalAdmin', hospitalAdminSchema);
