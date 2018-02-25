const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const noticeCounterSchema = new Schema({
  _id: String,
  sequence_value: Number
});

module.exports = mongoose.model("noticeCounter", noticeCounterSchema, "noticeCounters");
