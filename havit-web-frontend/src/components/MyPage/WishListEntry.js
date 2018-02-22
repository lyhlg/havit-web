import React, { Component } from 'react';

class WishListEntry extends Component {
  render() {
    console.log('sad', this.props.product);
    return (
      <div>
        <img src={this.props.product.img} alt="product" />
        <h3>{this.props.product.productName}</h3>
        <h4>{this.props.product.description}</h4>
        <h4>{this.props.product.price}</h4>
        <button>바로 예약</button>
        <button>상품 삭제</button>
      </div>
    );
  }
}

export default WishListEntry;
