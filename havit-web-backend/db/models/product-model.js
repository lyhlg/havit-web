const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const productSchema = new Schema({
  type: String,
  subType: String,
  img: String,
  hospitalCode: String,
  hospitalLoc: String,
  hospitalName: String,
  productName: String,
  description: String,
  price: Number,
  purchased: Number,
  productDetail: String,
  reviews: [String]
});


module.exports = mongoose.model('product', productSchema);

// dummy
/*
db.products.insert([{
  type: 'skin',
  subType: 'filling',
  img: './image/test10.jpg',
  hospitalCode: 'AAAA100000',
  hospitalLoc: '신사역',
  hospitalName: '제이디클리닉',
  productName: "여드름제로 7단계까지 풀패키지 129,000",
  description: '시술해드립니다.',
  price: 200000,
  purchased: 72,
  productDetail: './image/det2ail/test.jpg',
  reviews: []
},{
  type: 'beauty',
  subType: 'filler',
  img: './image/test23.jpg',
  hospitalCode: 'AAAA100001',
  hospitalLoc: '대치',
  hospitalName: '더밸런스한의원',
  productName: "프리미엄 필링 프로그램",
  description: '프리미엄 세일가 가격입니다..',
  price: 85000,
  purchased: 4922,
  productDetail: './image/detail/filler.jpg',
  reviews: []
},{
  type: 'beauty',
  subType: 'lefting',
  img: './image/test23.jpg',
  hospitalCode: 'AAAA100002',
  hospitalLoc: '천호',
  hospitalName: '코코클리닉',
  productName: '슈링크 300샷 풀 페이스',
  description: '추가로 크라이오셀 까지 !',
  price: 139000,
  purchased: 22,
  productDetail: './image/detail/lefting.jpg',
  reviews: []
},
{
  type: 'skin',
  subType: 'scaling',
  img: './image/test23.jpg',
  hospitalCode: 'AAAA100003',
  hospitalLoc: '강남',
  hospitalName: '포에버성형외과',
  productName: '바디 스케일링 특가이벤트',
  description: '스케일링 후 여드름 하나하나를 꼼꼼하게 압출하고 진정재생까지',
  price: 99000,
  purchased: 22,
  productDetail: './image/detail/scaling.jpg',
  reviews: []
},{
  type: 'beauty',
  subType: 'lifting',
  img: './image/test10.jpg',
  hospitalCode: 'AAAA100000',
  hospitalLoc: '신사역',
  hospitalName: '제이디클리닉',
  productName: "울핏 바디리프팅 + 슬림라인 비키니주사 패키지 ",
  description: '슈링크를 바디에 받다! 지방분해와 바디 리프팅을 동시에 원하는 당신의 선택! 울핏 패키지',
  price: 99000,
  purchased: 399,
  productDetail: './image/det2ail/test.jpg',
  reviews: []
}])
*/
