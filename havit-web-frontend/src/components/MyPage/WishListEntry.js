import React, { Component } from 'react';
import 'styles/css/MyPage/WishListEntry.css';

class WishListEntry extends Component {
  constructor(props) {
    super(props);
    this.movePurchase = this.movePurchase.bind(this);
    this.delProduct = this.delProduct.bind(this);
  }

  movePurchase() {
    this.props.history.push(`/products/${this.props.product.productId}`);
  }

  delProduct() {
    if (window.confirm('삭제하시겠습니까?')) {
      this.props.delLikeProducts(
        localStorage.getItem('email'),
        this.props.product.productId,
        () => {
          window.location.reload();
        }
      );
    }
  }

  render() {
    console.log(this.props);
    return (
      <div className="wishList">
        <img
          src={this.props.product.img}
          className="wishList__img"
          alt="product"
        />
        <div className="wishList__content">
          <div className="wishList__left">
            <h4 className="wishList__hospital">
              [{this.props.product.hospitalLoc}]{
                this.props.product.hospitalName
              }
            </h4>
            <h3 className="wishList__name">{this.props.product.productName}</h3>
            <h4 className="wishList__description">
              {this.props.product.description}
            </h4>
          </div>
          <div className="wishList__right">
            <h4 className="wishList__price">
              {this.props.product.price.toLocaleString('en')}원
            </h4>
            <button className="wishList__removeBtn" onClick={this.delProduct}>
              상품 삭제
            </button>
            <button
              className="wishList__purchaseBtn"
              onClick={this.movePurchase}
            >
              바로 예약
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default WishListEntry;
