const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const paymentSchema = new Schema({
  code: String,
  count : Number,
  price: Number
});


module.exports = mongoose.model("payment", paymentSchema, "payments");

// dummy
// db.payments.insert([
//   {
//     code: "AAAA100000",
//     reserveNum: "201811111111",
//     openPhoneNum: 1
//   },
//   {
//     code: "AAAA100000",
//     reserveNum: "201811111111",
//     openPhoneNum: 1
//   }
// ]);
