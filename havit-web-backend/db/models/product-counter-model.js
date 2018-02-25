const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const productCounterSchema = new Schema({
  _id: String,
  "sequence_value": Number
});

module.exports = mongoose.model("productCounter", productCounterSchema, "productCounters");
