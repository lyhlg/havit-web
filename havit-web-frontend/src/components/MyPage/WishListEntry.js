import React, { Component } from 'react';

class WishListEntry extends Component {
  render() {
    return (
      <div>
        <img src="http://dummyimage.com/200x200/000/fff" alt="product" />
        <h3>상품명</h3>
        <h4>상품 내용</h4>
        <h4>금액</h4>
        <button>바로 예약</button>
        <button>상품 삭제</button>
      </div>
    );
  }
}

export default WishListEntry;
