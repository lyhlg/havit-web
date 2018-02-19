import React, { Component } from 'react';
import 'styles/css/Common/ProductDetail.css';

class ProductDetail extends Component {
  render() {
    return (
      <div className="productDetail">
        <div className="productDetail__category">
          <p>홈 > 시술 상품 > 보톡스</p>
        </div>
        <div className="productDetail__info">
          <div className="productDetail__info__img">
            <img
              src="http://dummyimage.com/480x480/00c4e2/fff"
              alt="detail"
              align="left"
            />
          </div>
          <div className="productDetail__info__description">
            <h5>볼륨 + 탄력</h5>
            <h3>큐오필 1cc</h3>
            <h4>신사역</h4>
            <h4>59000원</h4>
            <h4>옵션</h4>
            <button type="submit">찜하기</button>
            <button type="submit">예약하기</button>
            <h4>구매 300개</h4>
          </div>
        </div>
      </div>
    );
  }
}

export default ProductDetail;
