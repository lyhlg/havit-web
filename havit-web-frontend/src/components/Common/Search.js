import React, { Component } from 'react';
import { Nav, Product, Pagination } from '../index';

class Search extends Component {
  render() {
    const korean = { hospital: '병원', product: '상품' };
    return (
      <main>
        <Nav />
        <div className="home__category">
          <h2 className="home__title">
            {korean[this.props.products.keyword[0]]}/{
              this.props.products.keyword[1]
            }{' '}
            검색결과 : {this.props.products.productsList.length}건
          </h2>
        </div>
        <Product products={this.props.products.productsList} />
        <Pagination handlePage={this.handlePage} {...this.props} />
      </main>
    );
  }
}

export default Search;
