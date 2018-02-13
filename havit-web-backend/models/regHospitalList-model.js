const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const regHospitalListSchema = new Schema({
  hospital_name : String,
  hospital_code : String,
  createdOn: { type: Date, default: Date.now }
});

module.exports = mongoose.model('regHostpitalList', regHospitalListSchema);
