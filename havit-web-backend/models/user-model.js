const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// ISO 시간 입력으로 9시간 이전 시간이 들어가는 문제가 발생한다.
// 해당 문제를 해결 하기 위한 함수
function getCurrentDate() {
  var date = new Date();

  var year = date.getFullYear();
  var month = date.getMonth();
  var today = date.getDate();
  var hours = date.getHours();
  var minutes = date.getMinutes();
  var seconds = date.getSeconds();
  var milliseconds = date.getMilliseconds();

  return new Date(Date.UTC(year, month, today, hours, minutes, seconds, milliseconds));
}

const userSchema = new Schema({
  specId: Number,
  name: String,
  user_id_email: { type: String, required: true, unique: true, lowercase: true },
  password: String,
  createdOn: { type: Date, default: getCurrentDate() },
  auth: String,
  phone: Number,
  birthday: Number,
  gender: String,
  likeArea: Array,
  likePoint: Array,
  hospitalCode: String,
  bookingList: {
    bookingNumber: Number,
    clinicName: String,
    bookingDate: Date,
    bookingTime: Date,
    status: {
      type: String, default: "전화예약 대기중"
    }
  },
  likeProduct: [{
    title: String,
    description: String,
    price: Number,
    hospital: String,
    region: String,
    numOfPurchases: Number,
    thumbnail: String,
    review: [{
      name: String,
      stars: Number,
      comment: String,
      createdOn: { type: Date, default: Date.now }
    }]
  }]
});

module.exports=mongoose.model('user', userSchema, 'users');

// module.exports = Users;
