import React, { Component } from 'react';
import { Banner, Product } from '../index';

class Home extends Component {
  render() {
    return (
      <main>
        <Banner />
        <Product />
      </main>
    );
  }
}

export default Home;
