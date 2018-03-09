import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import 'styles/css/Common/ProductEntry.css';

class ProductEntry extends Component {
  render() {
    return (
      <div className="productEntry">
        <Link
          to={`/products/${this.props.product.productId}`}
          className="productEntry__link"
        >
          <div className="productEntry__cover">
            <img
              src={this.props.product.img}
              className="productEntry__img"
              alt="product"
            />
          </div>
          <div className="productEntry__text">
            <h4 className="productEntry__hospital">
              [{this.props.product.hospitalLoc}]{
                this.props.product.hospitalName
              }
            </h4>
            <h3 className="productEntry__title">
              {this.props.product.productName.length > 12
                ? this.props.product.productName.slice(0, 12) + '...'
                : this.props.product.productName}
            </h3>
            <h5 className="productEntry__description">
              {this.props.product.description}
            </h5>
            <div className="productEntry__sales">
              <h4 className="productEntry__purchased">
                <span>{this.props.product.purchased}</span>구매
              </h4>
              <h4 className="productEntry__price">
                {this.props.product.price.toLocaleString('en')}원
              </h4>
            </div>
          </div>
        </Link>
      </div>
    );
  }
}

export default ProductEntry;
