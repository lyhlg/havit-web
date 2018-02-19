import React, { Component } from 'react';
import { Nav, Banner, Product } from '../index';

class All extends Component {
  render() {
    return (
      <main>
        <Nav />
        <Banner />
        <Product />
      </main>
    );
  }
}

export default All;
