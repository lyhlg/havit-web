import React, { Component } from 'react';
import { Nav, Banner, Product, Pagination } from '../index';
import 'styles/css/Home/Home.css';

class Home extends Component {
  constructor(props) {
    super(props);
    this.handlePage = this.handlePage.bind(this);
  }

  componentDidMount() {
    window.scrollTo(0, 0);
    this.props.getProducts('', '', 0, 1);
    this.props.getBanners();
  }

  handlePage(e) {
    window.scrollTo(0, 0);
    this.props.getProducts('', '', 0, e.target.textContent);
  }

  render() {
    return (
      <main>
        <Nav />
        <Banner {...this.props} />
        <div className="home__category">
          <h2 className="home__title">전체보기</h2>
        </div>
        <Product products={this.props.products.productsList} />
        <Pagination handlePage={this.handlePage} {...this.props} />
      </main>
    );
  }
}

export default Home;
