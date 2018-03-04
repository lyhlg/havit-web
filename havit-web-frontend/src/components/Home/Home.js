import React, { Component } from 'react';
import { Nav, Banner, Product } from '../index';
import 'styles/css/Home/Home.css';

class Home extends Component {
  componentDidMount() {
    this.props.getProducts('', '', 1);
  }

  render() {
    return (
      <main>
        <Nav />
        <Banner />
        <div className="home__category">
          <h2>전체보기</h2>
        </div>
        <Product products={this.props.products.productsList} />
      </main>
    );
  }
}

export default Home;
