const mongoose = require('mongoose');
const Schema = mongoose.Schema;
import { getCurrentDate } from "../../utils/index";

const reviewSchema = new Schema({
  user_id_email: String,
  stars: Number,
  comment: String,
  createdOn: { type: Date, default: getCurrentDate() },
  productId: Number
});

module.exports = mongoose.model('review', reviewSchema);

// dummy
/*
db.reviews.insert([{
  user_id_email: 'lyhlg0201@gmail.com',
  stars: 4,
  comment: '좋았다',
  productId: 53
},
{
  user_id_email: 'dubbsong@gmail.com',
  stars: '5',
  comment: 'This is really Good ! .',
  productId: 53
},
{
  user_id_email: 'iam.yonghyun@gmail.com',
  stars: '3.5',
  comment: '안좋았다.',
  product: ObjectId("5a9250bbaaa388d7cbd18f23")
},
{
  user_id_email: 'jyt9319@gmail.com',
  stars: '2',
  comment: '아무고토상.',
  product: ObjectId("5a9250bbaaa388d7cbd18f24")
},
{
  user_id_email: 'dubbsong@gmail.com',
  stars: '2',
  comment: 'fuck me.',
  product: ObjectId("5a9251b746a67f4df7a9b926")
}])
*/
//db.product.findOne({title: "프락셀"})._id
