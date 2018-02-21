import React, { Component } from 'react';
import { ProductEntry } from '../index';
import 'styles/css/Common/Product.css';

class Product extends Component {
  render() {
    return (
      <div className="product">
        {this.props.products.map((product, index) => (
          <ProductEntry product={product} key={index} />
        ))}
      </div>
    );
  }
}

export default Product;
