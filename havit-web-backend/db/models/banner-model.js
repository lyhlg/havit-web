const mongoose = require("mongoose");
const Schema = mongoose.Schema;
import { getCurrentDate } from "../../utils/index";

// 변경 필요
const bannerSchema = new Schema({
  img: { type: String, default: "https://dummyimage.com/1180x560" },
  title: String,
  url: String,
  priority: { type: Number, default: 10000 },
  status: String,
  createdOn: { type: Date, default: getCurrentDate() }
});

module.exports = mongoose.model("banner", bannerSchema, "banners");

//
// {
// 	"_id" : ObjectId("5a93f843d6590cbd371b434b"),
// 	"title" : "2월 공지 사항",
// 	"url" : "www.naver.com/aaa.png",
// 	"priority" : 5,
// 	"status" : "판매종료",
// }
// {
// 	"_id" : ObjectId("5a93f858d6590cbd371b434c"),
// 	"img" : "image2.img",
// 	"url" : "www.google.com/aaa.png",
// 	"priority" : 2,
// 	"status" : "판매중",
// 	"createdOn" : ISODate("2018-02-26T21:06:11.972Z"),
// 	"__v" : 0
// }
