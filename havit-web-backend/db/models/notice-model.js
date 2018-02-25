const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const noticeSchema = new Schema({
  _id: Number,
  title: String,
  body: String,
  author: String,
  views: { type: Number, default: 0 },
  createdOn: { type: Date, default: Date.now }
});

module.exports = mongoose.model("notice", noticeSchema, "notices");
