const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// ISO 시간 입력으로 입력 되는 date 값에 +9 시간 해준다.
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
  phone: String,
  birthday: Number,
  gender: String,
  likeArea: [String],
  likePoint: [String],
  reservation: [String],
  likeProduct: [String],
  review: [String]
});


module.exports=mongoose.model('user', userSchema, 'users');

// Dummy
/*
db.users.insert([{
specId: 12345,
name: '이용현',
user_id_email: 'lyhlg0201@gmail.com',
password: null,
auth: 'google',
phone: '01086674355',
birthday: 19890201,
gender: 'male',
likeArea: ['강남','판교'],
likePoint: ['FRONTEND', 'BACKEND'],
reservation: [201801010001]
},{
specId: 12346,
name: '홍길동',
user_id_email: 'hgd10101@gmail.com',
password: null,
auth: 'google',
phone: '01082383747',
birthday: 19890202,
gender: 'female',
likeArea: ['강남','판교'],
likePoint: ['FRONTEND', 'BACKEND'],
reservation: [201801010002]
},{
specId: 12347,
name: '전다해',
user_id_email: 'dahae@gmail.com',
password: null,
auth: 'google',
phone: '01030190222',
birthday: 19880124,
gender: 'female',
likeArea: ['청담','판교'],
likePoint: ['NETWORK', 'GOSU'],
reservation: [201801010003]
}])
*/
