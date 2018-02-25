import React, { Component } from 'react';
import 'styles/css/Common/ProductDetail.css';

class ProductDetail extends Component {
  componentDidMount() {
    this.props.getProducts('', '', this.props.location.pathname.slice(10));
  }

  render() {
    return (
      <div className="productDetail">
        <div className="productDetail__category">
          <p>홈 > 시술 상품 > 보톡스</p>
        </div>
        <div className="productDetail__info">
          <div className="productDetail__img">
            <img
              src={
                this.props.products.productsList[0] &&
                this.props.products.productsList[0].img
              }
              alt="detail"
              align="left"
            />
          </div>
          <div className="productDetail__text">
            <h4 className="productDetail__hospital">
              [{this.props.products.productsList[0] &&
                this.props.products.productsList[0].hospitalLoc}]{' '}
              {this.props.products.productsList[0] &&
                this.props.products.productsList[0].hospitalName}
            </h4>
            <h3 className="productDetail__title">
              {this.props.products.productsList[0] &&
                this.props.products.productsList[0].productName}
            </h3>
            <h5 className="productDetail__description">
              {this.props.products.productsList[0] &&
                this.props.products.productsList[0].description}
            </h5>
            <div className="productDetail__sales">
              <h4 className="productDetail__price">
                {this.props.products.productsList[0] &&
                  this.props.products.productsList[0].price}원
              </h4>
              <h4 className="productDetail__purchased">
                <span>
                  {this.props.products.productsList[0] &&
                    this.props.products.productsList[0].purchased}개{' '}
                </span>구매
              </h4>
            </div>
            <hr className="productDetail__divider" />
            <select className="productDetail__option">
              <option>옵션 선택</option>
            </select>
            <div>
              <button className="productDetail__purchaseBtn"> 구매하기 </button>
              <button className="productDetail__likeBtn"> 😤 </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ProductDetail;
