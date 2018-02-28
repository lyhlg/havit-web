import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import 'styles/css/Common/ProductInfo.css';

class ProductInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      info: true,
      infoColor: { color: '#647dff' },
      reviewColor: { color: '#afc2db' },
    };
    this.handleInfo = this.handleInfo.bind(this);
    this.handleReview = this.handleReview.bind(this);
  }

  handleInfo() {
    this.setState({
      info: true,
      infoColor: { color: '#647dff', borderBottom: '2px solid #647dff' },
      reviewColor: { color: '#afc2db' },
    });
  }

  handleReview() {
    this.setState({
      info: false,
      infoColor: { color: '#afc2db' },
      reviewColor: { color: '#647dff', borderBottom: '2px solid #647dff' },
    });
  }

  render() {
    console.log('aaa', this.props.products);
    return (
      <div className="productInfo">
        <div className="productInfo__btnWrapper">
          <button
            className="productInfo__btn"
            onClick={this.handleInfo}
            style={this.state.infoColor}
          >
            상품정보
          </button>
          <button
            className="productInfo__btn"
            onClick={this.handleReview}
            style={this.state.reviewColor}
          >
            상품후기
          </button>
        </div>
        {this.state.info ? (
          <div>
            <img
              src={
                this.props.products.productsList[0] &&
                this.props.products.productsList[0].productDetail
              }
            />
          </div>
        ) : (
          <div>
            {this.props.products.productsList[0] &&
            this.props.products.productsList.reviews ? (
              this.props.products.productsList[0] &&
              this.props.products.productsList.reviews.map((review, i) => {
                return <div key={i}>리뷰추가하기 귀찮노</div>;
              })
            ) : (
              <div>리뷰 없음</div>
            )}
          </div>
        )}
      </div>
    );
  }
}

export default ProductInfo;
