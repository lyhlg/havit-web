import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { ProductDetail } from '../index';
import 'styles/css/Common/ProductEntry.css';

class ProductEntry extends Component {
  render() {
    return (
      <div className="productEntry">
        <Link to="/detail" className="productEntry__link">
          <img src={this.props.product.img} alt="product" />
        </Link>
        <div className="productEntry__text">
          <h4 className="productEntry__hospital">
            {this.props.product.hospitalLoc}
          </h4>
          <h3 className="productEntry__title">{this.props.product.title}</h3>
          <h5 className="productEntry__description">
            {this.props.product.description}
          </h5>
          <div className="productEntry__sales">
            <h4 className="productEntry__purchased">
              <span>{this.props.product.purchased}</span>구매
            </h4>
            <h4 className="productEntry__price">
              {this.props.product.price}원
            </h4>
          </div>
        </div>
      </div>
    );
  }
}

export default ProductEntry;
