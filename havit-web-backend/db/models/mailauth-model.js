const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const mailauthSchema = new Schema({
  account: String,
  authCode: Number
});

module.exports = mongoose.model('mailauth', mailauthSchema);
