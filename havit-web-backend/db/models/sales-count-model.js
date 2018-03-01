const mongoose = require("mongoose");
const Schema = mongoose.Schema;
import { getCurrentDate } from "../../utils/index";

const salesCountSchema = new Schema({
  _id: Number,
  total: Number,
  purchased: Number,
  canceled: Number,
  fix: String,
  stars: Number
});

salesCountSchema.statics.UpdateFixValue = async function(_id, cb) {
  let tmp = await this.findOne({ _id }, { total: 1, purchased: 1 });
  if (tmp) return cb(tmp.purchased / tmp.total * 100);
  return 0;
};

salesCountSchema.statics.UpdateStars = async function(_id, cb) {

};

module.exports = mongoose.model("salesCount", salesCountSchema, "salesCounts");

/*
db.salesCounts.insert({ _id: 1, total: 3, purchased: 2, canceled: 1 });
db.salesCounts.insert({ _id: 5, total: 5, purchased: 3, canceled: 2 });
db.salesCounts.insert({ _id: 6, total: 7, purchased: 3, canceled: 4 });
db.salesCounts.insert({ _id: 8, total: 9, purchased: 1, canceled: 8 });
db.salesCounts.insert({ _id: 10, total: 10, purchased: 9, canceled: 1 });
db.salesCounts.insert({ _id: 11, total: 12, purchased: 8, canceled: 4 });
db.salesCounts.insert({ _id: 15, total: 32, purchased: 12, canceled: 20 });


*/
