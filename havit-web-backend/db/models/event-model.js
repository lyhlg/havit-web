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
//     hospitalCode: "AAAA100003",
//     hospitalLoc: "강남",
//     hospitalName: "포에버성형외과",
//     productName: "자체발광 피부 만들기!",
//     description:
//       "셀렉레이저 + 포토샤워 + 레이저토닝 + 비타민 미백관리 모두 한번에!.",
//     price: 99000,
//     status: "진행중",
//     priority: 3,
//     purchased: 23,
//     productImage: "https://dummyimage.com/1180x560",
//     reviews: []
//   },
//   {
//     productId: 101,
//     hospitalCode: "AAAA100003",
//     hospitalLoc: "강남",
//     hospitalName: "포에버성형외과",
//     productName: "입술필러 + 입꼬리필러.",
//     description:
//       "처진 입꼬리는 올리고 얇고 작은 입술은 도톰하게! 닥터홈즈 키스필러.",
//     price: 150000,
//     status: "종료",
//     priority: 4,
//     purchased: 242,
//     productImage: "https://dummyimage.com/1180x560",
//     reviews: []
//   },
//   {
//     productId: 102,
//     hospitalCode: "AAAA100005",
//     hospitalLoc: "청담",
//     hospitalName: "유마스템의원",
//     productName: "2018 수험생 성형이벤트",
//     description: "2018 수험생 전용! 눈성형, 콧대성형, 필러 다양한 이벤트!",
//     price: 190000,
//     status: "진행중",
//     priority: 3,
//     purchased: 23,
//     productImage: "https://dummyimage.com/1180x560",
//     reviews: []
//   }
// ]);
