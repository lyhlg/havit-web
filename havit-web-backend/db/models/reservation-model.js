const mongoose = require('mongoose');
const Schema = mongoose.Schema;
import { getCurrentDate } from "../../utils/index";

const reservationSchema = new Schema({
  user_id_email: String,
  hospitalCode: String,
  reserveNum: { type: String, required: true },
  userName: String,
  phone: String,
  openPhoneNum: Number,
  productName: String,
  reserveDate: String,
  careDate: { type: String, default: "전화대기중" },
  status: { type: String, default: "전화대기중" },
  createdOn: { type: Date, default: getCurrentDate() }
});

reservationSchema.statics.chk_total_purch_cancel_Count = async function (cb) {
  const a = await this.find({hospitalCode : code})

  // const totalRsrvCount = await this.find({status: "전화대기중"}).count();
  // const purchasedCount = await this.find({status: "시술진행중"}).count();
  // const completedCount = await this.find({status: "시술진행중"}).count();
  // const cancelCount = await this.find({status: "취소"}).count();
  // return cb([{
  //   totalRsrvCount,
  //   purchasedCount,
  //   completedCount,
  //   cancelCount
  // }]);
};

module.exports = mongoose.model('reservation', reservationSchema);


// Dummy 밑에 필요 없음. addReservation을 통해서 추가하자.
/*
mutation{
  addReservation(user_id_email: "jyt9319@gmail.com",
  hospitalCode:"AAAA100000",
  userName: "정유택",
  phone:"01021139177",
  productName: "보톡스 최저가를 노린다",
  reserveDate: "201803201718") {
    _id
    reserveNum
    user_id_email
    hospitalCode
    userName
    phone
    openPhoneNum
    productName
    reserveDate
    careDate
    status
  }
}
*/
