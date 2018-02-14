import React, { Component } from 'react';
import { ProductEntry } from '../index';

class Product extends Component {
  render() {
    return (
      <div>
        <td>
          <ProductEntry />
        </td>
        <td>
          <ProductEntry />
        </td>
        <td>
          <ProductEntry />
        </td>
      </div>
    );
  }
}

export default Product;
