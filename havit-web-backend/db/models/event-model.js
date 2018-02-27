const mongoose = require("mongoose");
const Schema = mongoose.Schema;
import { getCurrentDate } from "../../utils/index";

// 변경 필요
const eventSchema = new Schema({
  productId: Number,
  hospitalCode: String,
  hospitalLoc: String,
  hospitalName: String,
  productName: String,
  description: String,
  price: Number,
  status: String,
  purchased: { type: Number, default: 0 },
  productImage: { type: String, default: "https://dummyimage.com/1180x560" },
  reviews: [String],
  options: String,
  createdOn: { type: Date, default: getCurrentDate() }
});

module.exports = mongoose.model("event", eventSchema, "events");
