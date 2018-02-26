const mongoose = require('mongoose');
const Schema = mongoose.Schema;
import { getCurrentDate } from "../../utils/index";

// 변경 필요
const bannerSchema = new Schema({
  type: String,
  subType: String,
  product: String,
  status: { type: String, default: "판매중" },
  priority: { type: Number, default: 100000 },
  createdOn: { type: Date, default: getCurrentDate() }
});

module.exports = mongoose.model('banner', bannerSchema, 'banners');

// dummy : 추후 관리자 업데이트 할 수 있도록 기능 구현 필요
/*
db.banners.insert([
{
  "type" : "skin",
  "subType" : "filling",
  "product" : ObjectId("5a9250bbaaa388d7cbd18f16"),
},{
  "type" : "beauty",
	"subType" : "filler",
  "product" : ObjectId("5a9250bbaaa388d7cbd18f17"),
},{
  "type" : "beauty",
	"subType" : "lefting",
  "product" : ObjectId("5a9250bbaaa388d7cbd18f18"),
},{
  "type" : "skin",
	"subType" : "scaling",
  "product" : ObjectId("5a9250bbaaa388d7cbd18f19"),
}
])
*/
