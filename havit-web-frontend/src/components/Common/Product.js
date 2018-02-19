import React, { Component } from 'react';
import { ProductEntry } from '../index';
import 'styles/css/Common/Product.css';

const dummy = [
  {
    type: 'All',
    subType: '필러',
    img: 'https://dummyimage.com/280x280',
    hospitalLoc: '[신사역] 라피네클리닉',
    title: '큐오필 1cc',
    description: '볼륨+탄력+콜라겐+지속력+피부',
    price: 59000,
    purchased: 299,
    productDetail: '상세정보',
    review: '-',
  },
  {
    type: 'All',
    subType: '필러',
    img: 'https://dummyimage.com/280x280',
    hospitalLoc: '[신사역] 라피네클리닉',
    title: '큐오필 1cc',
    description: '볼륨+탄력+콜라겐+지속력+피부',
    price: 59000,
    purchased: 299,
    productDetail: '상세정보',
    review: '-',
  },
  {
    type: 'All',
    subType: '피부레이저',
    img: 'https://dummyimage.com/280x280',
    hospitalLoc: '[신논현역] 라피네클리닉',
    title: '자체발광 피부 만들기',
    description: '셀렉레이저+포토샤워+레이저',
    price: 99000,
    purchased: 3490,
    productDetail: '상세정보',
    review: '-',
  },
  {
    type: 'All',
    subType: '필러',
    img: 'https://dummyimage.com/280x280',
    hospitalLoc: '[강남역] 코디성형외과',
    title: '2018 수험생 성형이벤트',
    description: '2018 수험생 전용! 필러 이벤트!',
    price: 790000,
    purchased: 147,
    productDetail: '상세정보',
    review: '-',
  },
];

class Product extends Component {
  render() {
    return (
      <div className="product">
        {dummy.map((product, index) => (
          <ProductEntry product={product} key={index} />
        ))}
      </div>
    );
  }
}

export default Product;
