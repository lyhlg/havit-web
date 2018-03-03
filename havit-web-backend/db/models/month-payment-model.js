const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const monthPaymentSchema = new Schema({
  jan: Schema.Types.Mixed,
  feb: Schema.Types.Mixed,
  mar: Schema.Types.Mixed,
  apr: Schema.Types.Mixed,
  may: Schema.Types.Mixed,
  jun: Schema.Types.Mixed,
  jul: Schema.Types.Mixed,
  aug: Schema.Types.Mixed,
  sep: Schema.Types.Mixed,
  oct: Schema.Types.Mixed,
  nov: Schema.Types.Mixed,
  dec: Schema.Types.Mixed,
});

module.exports = mongoose.model(
  "monthPayment",
  monthPaymentSchema,
  "monthPayments"
);
