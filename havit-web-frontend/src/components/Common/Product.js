import React, { Component } from 'react';
import { ProductEntry } from '../index';
import 'styles/css/Common/Product.css';

class Product extends Component {
  render() {
    return (
      <div className="product">
        {this.props.products.map((product, i) => (
          <ProductEntry product={product} key={i} />
        ))}
      </div>
    );
  }
}

export default Product;
