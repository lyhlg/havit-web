const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const hospitalSchema = new Schema({
  code : String,
  reservation: [Number]
});


module.exports = mongoose.model('hospital', hospitalSchema);
