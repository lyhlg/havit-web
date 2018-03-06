const mongoose = require("mongoose");
const Schema = mongoose.Schema;
import { getCurrentDate } from "../../utils/index";

const noticeSchema = new Schema({
  _id: Number,
  title: String,
  body: String,
  author: String,
  url: String,
  views: { type: Number, default: 0 },
  createdOn: { type: Date, default: getCurrentDate() }
});

module.exports = mongoose.model("notice", noticeSchema, "notices");
