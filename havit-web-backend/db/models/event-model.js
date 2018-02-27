const mongoose = require("mongoose");
const Schema = mongoose.Schema;
import { getCurrentDate } from "../../utils/index";

// 변경 필요
const eventSchema = new Schema({
  productId: Number,
  hospitalCode: String,
  hospitalLoc: String,
  hospitalName: String,
  productName: String,
  description: String,
  price: Number,
  status: String,
  priority: { type: Number, default: 100 },
  purchased: { type: Number, default: 0 },
  productImage: { type: String, default: "https://dummyimage.com/1180x560" },
  reviews: [String],
  options: String,
  createdOn: { type: Date, default: getCurrentDate() }
});

module.exports = mongoose.model("event", eventSchema, "events");

// db.events.insert([
//   {
//     productId: 100,
//     hospitalCode: "A",
//     hospitalLoc: "삼성동",
//     hospitalName: "삼성병원",
//     productName: "테스트더미입니다.",
//     description: "테스트더미입니다.",
//     price: 190000,
//     status: "진행중",
//     priority: 3,
//     purchased: 23,
//     productImage: "https://dummyimage.com/1180x560",
//     reviews: []
//   },
//   {
//     productId: 101,
//     hospitalCode: "A",
//     hospitalLoc: "삼성동",
//     hospitalName: "삼성병원",
//     productName: "테스트더미입니다2.",
//     description: "테스트더미입니다2.",
//     price: 300000,
//     status: "종료",
//     priority: 4,
//     purchased: 242,
//     productImage: "https://dummyimage.com/1180x560",
//     reviews: []
//   }
// ]);

// db.events.insert(
//   {
//     productId: 102,
//     hospitalCode: "B",
//     hospitalLoc: "삼성동",
//     hospitalName: "삼성병원",
//     productName: "테스트더미입니다.3",
//     description: "테스트더미입니다.3",
//     price: 190000,
//     status: "진행중",
//     priority: 3,
//     purchased: 23,
//     productImage: "https://dummyimage.com/1180x560",
//     reviews: []
//   })
