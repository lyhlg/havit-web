import React, { Component } from 'react';
import { ProductEntry } from '../index';

const dummy = [
  {
    type: 'All',
    subType: '필러',
    img: 'https://dummyimage.com/200x200',
    hospitalLoc: '[신사역] 라피네클리닉',
    title: '큐오필 1cc',
    description: '볼륨+탄력+콜라겐+지속력+피부톤을 한 번에!',
    price: 59000,
    purchased: 299,
    productDetail: '상세정보',
    review: '-',
  },
  {
    type: 'All',
    subType: '피부레이저',
    img: 'https://dummyimage.com/200x200',
    hospitalLoc: '[신논현역] 라피네클리닉',
    title: '자체발광 피부 만들기',
    description: '셀렉레이저+포토샤워+레이저토닝 모두 한 번에!',
    price: 99000,
    purchased: 3490,
    productDetail: '상세정보',
    review: '-',
  },
  {
    type: 'All',
    subType: '필러',
    img: 'https://dummyimage.com/200x200',
    hospitalLoc: '[강남역] 코디성형외과',
    title: '2018 수험생 성형이벤트',
    description: '2018 수험생 전용! 필러 이벤트!',
    price: 790000,
    purchased: 147,
    productDetail: '상세정보',
    review: '-',
  },
  {
    type: 'Skin',
    subType: '필링',
    img: 'https://dummyimage.com/200x200',
    hospitalLoc: '[강남/신사역] 제이디클리닉',
    title: '레가토2 피부재생 패키지',
    description: '모공+흉터+잔주름+튼살 피부탄력 개선!',
    price: 79000,
    purchased: 404,
    productDetail: '상세정보',
    review: '-',
  },
  {
    type: 'Skin',
    subType: '반영구',
    img: 'https://dummyimage.com/200x200',
    hospitalLoc: '[신사역] 엔젤미의원',
    title: '크고 또렷한 눈매! 아이라인 반영구',
    description: '쌩얼도 예쁘다! 뚜렷하고 커보이는 눈매 만들기!',
    price: 90000,
    purchased: 486,
    productDetail: '상세정보',
    review: '-',
  },
  {
    type: 'Skin',
    subType: '미용주사',
    img: 'https://dummyimage.com/200x200',
    hospitalLoc: '[천호역] 코코클리닉',
    title: '리쥬란힐러 1cc',
    description: '피부세포 재생 촉진제 리쥬란힐러! 탁월한 피부재생!',
    price: 150000,
    purchased: 99,
    productDetail: '상세정보',
    review: '-',
  },
  {
    type: 'Beauty',
    subType: '보톡스',
    img: 'https://dummyimage.com/200x200',
    hospitalLoc: '[천호역] 코코클리닉',
    title: '작은얼굴 아큐주사!',
    description: '숨어있는 브이라인 찾기! 턱라인+광대+이중턱!',
    price: 49000,
    purchased: 591,
    productDetail: '상세정보',
    review: '-',
  },
  {
    type: 'Beauty',
    subType: '보톡스',
    img: 'https://dummyimage.com/200x200',
    hospitalLoc: '[강남역] 포에버성형외과',
    title: '포에버 부위별 맞춤 보톡스',
    description: '부위별로 예뻐지기! 미간+눈가+이마+사각턱!',
    price: 16000,
    purchased: 4464,
    productDetail: '상세정보',
    review: '-',
  },
  {
    type: 'Beauty',
    subType: '리프팅',
    img: 'https://dummyimage.com/200x200',
    hospitalLoc: '[하남] 제이디클리닉',
    title: '슬림라인 비키니주사',
    description: '지방분해와 바디 리프팅을 동시에 원하는 당신의 선택!',
    price: 99000,
    purchased: 86,
    productDetail: '상세정보',
    review: '-',
  },
];

class Product extends Component {
  render() {
    return (
      <div>
        <td>
          {dummy.map((ssup, index) => (
            <ProductEntry ssupDummy={ssup} i={index} />
          ))}
        </td>
      </div>
    );
  }
}

export default Product;
