const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const productSchema = new Schema({
  type: String,
  subType: String,
  img: { type: String, default: "https://dummyimage.com/280x280" },
  hospitalCode: String,
  hospitalLoc: String,
  hospitalName: String,
  productName: String,
  description: String,
  price: Number,
  purchased: { type: Number, default: 0 },
  productDetail: { type: String, default: "https://dummyimage.com/1180x560" },
  reviews: [String]
});


module.exports = mongoose.model('product', productSchema);

// dummy
/*
db.products.insert([{
  type: 'skin',
  subType: 'filling',
  img: 'https://dummyimage.com/280x280',
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
  img: 'https://dummyimage.com/280x280',
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
  img: 'https://dummyimage.com/280x280',
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
  img: 'https://dummyimage.com/280x280',
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
  img: 'https://dummyimage.com/280x280',
  hospitalCode: 'AAAA100000',
  hospitalLoc: '신사역',
  hospitalName: '제이디클리닉',
  productName: "울핏 바디리프팅 + 슬림라인 비키니주사 패키지 ",
  description: '슈링크를 바디에 받다! 지방분해와 바디 리프팅을 동시에 원하는 당신의 선택! 울핏 패키지',
  price: 99000,
  purchased: 399,
  productDetail: './image/det2ail/test.jpg',
  reviews: []
},
{
  type: 'beauty',
  subType: 'botox',
  img: 'https://dummyimage.com/280x280',
  hospitalCode: 'AAAA100000',
  hospitalLoc: '신사역',
  hospitalName: '제이디클리닉',
  productName: "보톡스 최저가를 노린다.",
  description: '클레르 v라인 패키지, 윤곽주사+보톡스+실리프팅.',
  price: 15000,
  purchased: 72,
  productDetail: './image/det2ail/test.jpg',
  reviews: []
}, {
  type: 'beauty',
  subType: 'botox',
  img: 'https://dummyimage.com/280x280',
  hospitalCode: 'AAAA100001',
  hospitalLoc: '대치',
  hospitalName: '더밸런스한의원',
  productName: "사각턱보톡스+광대축소주사",
  description: '갸름한 v라인과 동시에 매끄러운 광대라인 또는 콧볼축소를',
  price: 110000,
  purchased: 4922,
  productDetail: './image/detail/filler.jpg',
  reviews: []
}, {
  type: 'beauty',
  subType: 'lefting',
  img: 'https://dummyimage.com/280x280',
  hospitalCode: 'AAAA100002',
  hospitalLoc: '천호',
  hospitalName: '코코클리닉',
  productName: '꽃받침주사',
  description: '갸름한 턱, 지방은 줄이고 탄력있게!',
  price: 150000,
  purchased: 22,
  productDetail: './image/detail/lefting.jpg',
  reviews: []
},
{
  type: 'beauty',
  subType: 'ContourInjection',
  img: 'https://dummyimage.com/280x280',
  hospitalCode: 'AAAA100003',
  hospitalLoc: '강남',
  hospitalName: '포에버성형외과',
  productName: '빼빼로 주사',
  description: '굶어서 살 빼는 잘못된 다이어트를 하는 분들에게 ~ 빼빼로주사 부위당 6만6천원',
  price: 66000,
  purchased: 22,
  productDetail: './image/detail/scaling.jpg',
  reviews: []
}, {
  type: 'beauty',
  subType: 'ContourInjection',
  img: 'https://dummyimage.com/280x280',
  hospitalCode: 'AAAA100000',
  hospitalLoc: '신사역',
  hospitalName: '제이디클리닉',
  productName: "슬림 V라인 윤곽 패키지",
  description: '사각턱보톡스+윤곽주사+실리프팅 궁극의 윤곽패키지',
  price: 25000,
  purchased: 2,
  productDetail: './image/det2ail/test.jpg',
  reviews: []
},
{
  type: 'beauty',
  subType: 'ContourInjection',
  img: 'https://dummyimage.com/280x280',
  hospitalCode: 'AAAA100000',
  hospitalLoc: '신사역',
  hospitalName: '제이디클리닉',
  productName: "입체감있는 작은얼굴, 슬림한 몸매",
  description: '스테로이드 없는 지방 분해 주사',
  price: 10000,
  purchased: 46,
  productDetail: './image/det2ail/test.jpg',
  reviews: []
}, {
  type: 'skin',
  subType: 'acne',
  img: 'https://dummyimage.com/280x280',
  hospitalCode: 'AAAA100001',
  hospitalLoc: '대치',
  hospitalName: '더밸런스한의원',
  productName: "프락셀(얼굴전체)+헬륨레이저 재생관리",
  description: '매끈한 피부와 깨끗한 모공을 위한 프락셀+재생관리 케어',
  price: 48000,
  purchased: 22,
  productDetail: './image/detail/filler.jpg',
  reviews: []
}, {
  type: 'skin',
  subType: 'acne',
  img: 'https://dummyimage.com/280x280',
  hospitalCode: 'AAAA100002',
  hospitalLoc: '천호',
  hospitalName: '코코클리닉',
  productName: '몸 여드름 타파! 몸드름패키지',
  description: '올 여름 2% 부족한 내 바디를 위한 몸드름패키지',
  price: 149000,
  purchased: 222,
  productDetail: './image/detail/lefting.jpg',
  reviews: []
},
{
  type: 'skin',
  subType: 'acne',
  img: 'https://dummyimage.com/280x280',
  hospitalCode: 'AAAA100003',
  hospitalLoc: '강남',
  hospitalName: '포에버성형외과',
  productName: '알라딘필링',
  description: '자신있게 다가올 여름을 위해 여드름치료는 알라딘필링',
  price: 99000,
  purchased: 952,
  productDetail: './image/detail/scaling.jpg',
  reviews: []
}, {
  type: 'beauty',
  subType: 'filler',
  img: 'https://dummyimage.com/280x280',
  hospitalCode: 'AAAA100000',
  hospitalLoc: '신사역',
  hospitalName: '제이디클리닉',
  productName: "명품코코만의 명.품.필.러",
  description: '[성형외과 전문의] 벨라스트 무통필러 사용!',
  price: 30000,
  purchased: 572,
  productDetail: './image/det2ail/test.jpg',
  reviews: []
}])
*/
