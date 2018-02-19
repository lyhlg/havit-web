import React, { Component } from 'react';
import { Nav, Banner, Product } from '../index';

class Event extends Component {
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

export default Event;
