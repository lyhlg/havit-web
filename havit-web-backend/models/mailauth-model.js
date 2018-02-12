const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const mailauthSchema = new Schema({
  mail_account: String,
  Auth_number: Number
})

module.exports = mongoose.model('mailauth', mailauthSchema);
