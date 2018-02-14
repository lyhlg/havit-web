import React, { Component } from 'react';

class ProductEntry extends Component {
  render() {
    return (
      <div>
        <img src="http://dummyimage.com/300x300/00c3a3/fff" alt="product" />
        <h4>신사역</h4>
        <h3>큐오필 1cc</h3>
        <h5>볼륨 + 탄력</h5>
        <h4>구매 300개</h4>
        <h4>59000원</h4>
      </div>
    );
  }
}

export default ProductEntry;
