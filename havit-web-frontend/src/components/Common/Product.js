import React, { Component } from 'react';
import { ProductEntry } from '../index';
import 'styles/css/Common/Product.css';

class Product extends Component {
  render() {
    return (
      <div className="product">
        {this.props.products.length !== 0 ? (
          this.props.products.map((product, i) => (
            <ProductEntry product={product} key={i} />
          ))
        ) : (
          <p className="none">상품이 없습니다</p>
        )}
      </div>
    );
  }
}

export default Product;
