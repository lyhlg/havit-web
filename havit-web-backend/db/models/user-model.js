const mongoose = require("mongoose");
const Schema = mongoose.Schema;
import crypto from 'crypto';
import { getCurrentDate } from "../../utils/index";
import keys from "../../config/keys";

const userSchema = new Schema({
  name: String,
  user_id_email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true
  },
  password: String,
  createdOn: { type: Date, default: getCurrentDate() },
  auth: String,
  phone: Number,
  birthday: Number,
  gender: String,
  level: { type: Number, default: 3 },
  likeAreas: [String],
  likePoints: [String],
  reservations: [Number],
  likeProducts: [Number],
  reviews: [String],
  hospitalCode: { type: String, default: null }
});
// likeProduct: [{type: mongoose.Schema.Types.ObjectId, ref: 'Product' }],

userSchema.statics.hasingPasswd = (password, callback) => {
  const encrypted = crypto.createHmac('sha1', keys.session.secret).update(password).digest('base64');
  return callback(encrypted);
}

module.exports = mongoose.model("user", userSchema, "users");

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
gender: '남자',
likeArea: ['강남','판교'],
likePoint: ['FRONTEND', 'BACKEND'],
reservation: []
},{
specId: 12346,
name: '홍길동',
user_id_email: 'hgd10101@gmail.com',
password: null,
auth: 'google',
phone: '01082383747',
birthday: 19890202,
gender: '여자',
likeArea: ['강남','판교'],
likePoint: ['FRONTEND', 'BACKEND'],
reservation: []
},{
specId: 12347,
name: '전다해',
user_id_email: 'dahae@gmail.com',
password: null,
auth: 'google',
phone: '01030190222',
birthday: 19880124,
gender: '여자',
likeArea: ['청담','판교'],
likePoint: ['NETWORK', 'GOSU'],
reservation: []
}])
*/
