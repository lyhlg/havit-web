const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const maxPageSchema = new Schema({
  _id: String,
  products_count: Number,
  reservations_count: Number,
  hospitalAdmins_count: Number,
  events_count: Number,
  notices_count: Number
});

module.exports = mongoose.model("maxPage", maxPageSchema, "maxPages");
