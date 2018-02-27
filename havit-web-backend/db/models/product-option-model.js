const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const productOptionSchema = new Schema({
  type : [String],
  subType : [String],
  productId : Number
});

module.exports = mongoose.model("productOption", productOptionSchema, "productOptions");
