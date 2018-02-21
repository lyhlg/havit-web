import React, { Component } from 'react';
import { Nav, Banner, Product } from '../index';

class All extends Component {
  componentDidMount() {
    this.props.getProducts();
  }

  render() {
    return (
      <main>
        <Nav />
        <Banner />
        <Product products={this.props.products.productsList} />
      </main>
    );
  }
}

export default All;
