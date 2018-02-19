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
          <div className="productDetail__img">
            <img
              src="http://dummyimage.com/480x480/00c4e2/fff"
              alt="detail"
              align="left"
            />
          </div>
          <div className="productDetail__text">
            <h4 className="productDetail__hospital">[강남구] 라피네 클리닉</h4>
            <h3 className="productDetail__title">큐오필 1CC</h3>
            <h5 className="productDetail__description">
              볼륨+탄력+콜라겐+지속력+피부
            </h5>
            <div className="productDetail__sales">
              <h4 className="productDetail__price">59,000원</h4>
              <h4 className="productDetail__purchased">
                <span>38 개 </span>구매
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
