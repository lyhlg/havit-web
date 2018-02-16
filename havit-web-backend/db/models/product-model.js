const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const productSchema = new Schema({
  type: String,
  subType: String,
  img: String,
  hospitalLoc: String,
  hospitalName: String,
  title: String,
  description: String,
  price: Number,
  purchased: Number,
  productDetail: String,
  review: [String]
});


module.exports = mongoose.model('product', productSchema);

// dummy
/*
db.products.insert([{
  type: 'skin',
  subType: 'lazer',
  img: './image/test.jpg',
  hospitalLoc: '강남',
  hospitalName: '강남병원',
  title: '프락셀',
  description: '시술해드립니다.',
  price: 50000,
  purchased: 231,
  productDetail: './image/detail/test.jpg',
  review: []
},{
  type: 'skin',
  subType: 'lazer',
  img: './image/test2.jpg',
  hospitalLoc: '강남',
  hospitalName: '강남병원',
  title: '프락셀2',
  description: '시술해드립니다.',
  price: 30000,
  purchased: 100,
  productDetail: './image/detail/test2.jpg',
  review: []
}])
*/

// db.products.insert([{
//   type: 'skin',
//   subType: 'lazer',
//   img: './image/test.jpg',
//   hospitalLoc: '강남',
//   hospitalName: '강남병원'
// }, {
//   type: 'skin',
//   subType: 'lazer',
//   img: './image/test2.jpg',
//   hospitalLoc: '강남',
//   hospitalName: '강남병원'
// }])
