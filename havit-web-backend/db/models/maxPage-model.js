const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const maxPageSchema = new Schema({
  products : Number,
  reservations: Number,
  hospitalAdmins: Number,
  events: Number,
  notices: Number,
});

module.exports = mongoose.model("maxPage", maxPageSchema, "maxPages");
