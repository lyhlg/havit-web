import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { ProductDetail } from '../index';

class ProductEntry extends Component {
  render() {
    return (
      <div>
        <Link to="/detail" className="productentry__link">
          <img src={this.props.product.img} alt="product" />
        </Link>
        <h4>{this.props.product.hospitalLoc}</h4>
        <h3>{this.props.product.title}</h3>
        <h5>{this.props.product.description}</h5>
        <h4>{this.props.product.purchased}</h4>
        <h4>{this.props.product.price}</h4>
      </div>
    );
  }
}

export default ProductEntry;
