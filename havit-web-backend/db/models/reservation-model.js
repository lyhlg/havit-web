const mongoose = require('mongoose');
const Schema = mongoose.Schema;
import { getCurrentDate } from "../../utils/index";

const reservationSchema = new Schema({
  user_id_email: String,
  hospitalCode: String,
  reserveNum: { type: String, required: true },
  userName: String,
  phone: String,
  openPhoneNum: Number,
  productName: String,
  reserveDate: String,
  careDate: { type: String, default: "전화대기중" },
  status: { type: String, default: "전화대기중" },
  createdOn: { type: Date, default: getCurrentDate() }
});

module.exports = mongoose.model('reservation', reservationSchema);
