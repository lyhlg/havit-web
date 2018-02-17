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
  subType: 'filling',
  img: './image/test10.jpg',
  hospitalLoc: '인천',
  hospitalName: '인천병원',
  title: '필링',
  description: '시술해드립니다.',
  price: 200000,
  purchased: 72,
  productDetail: './image/det2ail/test.jpg',
  review: []
},{
  type: 'beauty',
  subType: 'filler',
  img: './image/test23.jpg',
  hospitalLoc: '분당',
  hospitalName: '분당병원',
  title: '코필러',
  description: '오지게넣어드립니다.',
  price: 85000,
  purchased: 4922,
  productDetail: './image/detail/filler.jpg',
  review: []
},{
  type: 'beauty',
  subType: 'lefting',
  img: './image/test23.jpg',
  hospitalLoc: '대구',
  hospitalName: '대구통합병원',
  title: '리프티잉',
  description: '오지게올려드립니다.',
  price: 720000,
  purchased: 22,
  productDetail: './image/detail/lefting.jpg',
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
