import React, { Component } from 'react';
import { Banner, Product } from '../index';

class Home extends Component {
  render() {
    return (
      <main>
        <Banner />
        <Product products={this.props.products.productsList.data} />
      </main>
    );
  }
}

export default Home;
