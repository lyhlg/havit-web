import React, { Component } from 'react';

class ProductDetail extends Component {
  render() {
    return (
      <div>
        <img
          src="http://dummyimage.com/500x500/00c4e2/fff"
          alt="detail"
          align="left"
        />
        <h5>볼륨 + 탄력</h5>
        <h3>큐오필 1cc</h3>
        <h4>신사역</h4>
        <h4>59000원</h4>
        <h4>옵션</h4>
        <button type="submit">찜하기</button>
        <button type="submit">예약하기</button>
        <h4>구매 300개</h4>
      </div>
    );
  }
}

export default ProductDetail;
