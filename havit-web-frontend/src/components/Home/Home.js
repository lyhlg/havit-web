import React, { Component } from 'react';
import { Nav, Banner, Product, Pagination } from '../index';
import 'styles/css/Home/Home.css';

class Home extends Component {
  constructor(props) {
    super(props);
    this.handlePage = this.handlePage.bind(this);
  }

  componentDidMount() {
    this.props.getProducts('', '', 0, 1);
  }

  handlePage(e) {
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
        <Pagination
          handlePage={this.handlePage}
          max={
            this.props.products.productsList[0] &&
            this.props.products.productsList[0].maxPage
          }
        />
      </main>
    );
  }
}

export default Home;
