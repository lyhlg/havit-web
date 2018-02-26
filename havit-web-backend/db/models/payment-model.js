const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const paymentSchema = new Schema({
  code: String,
  reserveNum: String,
  openPhoneNum: { type: Number, default: 0 }
});

// paymentSchema.static.billing = async function () => {
//   const count = (await this.find({openPhoneNum: 1})).count();
//   return count * 20000;
// }


module.exports = mongoose.model("payment", paymentSchema, "payments");
