const mongoose = require("mongoose");
const Schema = mongoose.Schema;
import { getCurrentDate } from "../../utils/index";

const reservationSchema = new Schema({
  reserveNum: { type: Number, required: true },
  user_id_email: String,
  hospitalCode: String,
  userName: String,
  phone: Number,
  openPhoneNum: Number,
  productId: Number,
  productName: String,
  reserveDate: Number,
  careDate: Number,
  status: { type: String, default: "전화대기중" },
  maxPage: Number,
  createdOn: { type: Date, default: getCurrentDate() }
});

module.exports = mongoose.model("reservation", reservationSchema);
