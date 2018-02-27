const mongoose = require("mongoose");
const Schema = mongoose.Schema;
import { getCurrentDate } from "../../utils/index";

// 변경 필요
const bannerSchema = new Schema({
  img: String,
  url: String,
  priority: { type: Number, default: 10000 },
  status: String,
  createdOn: { type: Date, default: getCurrentDate() }
});

module.exports = mongoose.model("banner", bannerSchema, "banners");
