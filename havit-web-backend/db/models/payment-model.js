const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const paymentSchema = new Schema({
  code: String,
  count : Number,
  price: Number
});


module.exports = mongoose.model("payment", paymentSchema, "payments");
