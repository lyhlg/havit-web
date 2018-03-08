const mongoose = require("mongoose");
const Schema = mongoose.Schema;
import { getCurrentDate } from "../../utils/index";

const hospitalAdminSchema = new Schema({
  code: String,
  name: String,
  loc: String,
  adminAccount: { type: String, default: "미등록" },
  createdOn: { type: Date, default: getCurrentDate() }
});

module.exports = mongoose.model(
  "hospitalAdmin",
  hospitalAdminSchema,
  "hospitalAdmins"
);

//dummy -> Admin page에서 추가할 수 있도록 기능 추가 필요
/*
db.hospitalAdmins.insert([{
  code: 'AAAA100000',
  name: '네이처피부과',
  loc: "강남구"
},
{
  code: 'AAAA100001',
  name: '네이처피부과',
  loc: "강남구"
},
{
  code: 'AAAA100002',
  name: '설레임의원',
  loc: "강남구"
},
{
  code: 'AAAA100003',
  name: '포에버성형외과',
  loc: "강남"
},
{
  code: 'AAAA100004',
  name: '필클리닉',
  loc: "구로"
},
{
  code: 'AAAA100005',
  name: '유마스템의원',
  loc: "청담"
},
{
  code: 'AAAA100006',
  name: '엘클리닉',
  loc: "양재"
},
{
  code: 'AAAA100007',
  name: '아름다운미의원',
  loc: "당산"
},
{
  code: 'AAAA100008',
  name: '강남피어리의원',
  loc: "신사"
},
{
  code: 'AAAA100009',
  name: '서울제일예쁜병원',
  loc: "대치"
}
])
*/
