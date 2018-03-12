import React, { Component } from 'react';
import { Nav, Banner, Product, Pagination } from '../index';
import { NavLink } from 'react-router-dom';
import 'styles/css/Beauty/Beauty.css';

class Beauty extends Component {
  constructor(props) {
    super(props);
    this.handleCategory = this.handleCategory.bind(this);
    this.handlePage = this.handlePage.bind(this);
  }

  componentDidMount() {
    this.props.getProducts(
      'beauty',
      this.props.history.location.pathname.slice(8) || '',
      0,
      1
    );
    this.props.getBanners();
  }

  handleCategory(e) {
    this.props.getProducts(
      'beauty',
      e.currentTarget.parentNode.pathname.slice(8),
      0,
      1
    );
    document
      .getElementsByClassName('pagination')[0]
      .childNodes.forEach(child => {
        child.style = 'border: 1px solid #dce2eb; color: #dce2eb';
      });
    document.getElementsByClassName('pagination')[0].childNodes[0].style =
      'border: 1px solid #647dff; color: #647dff';
  }

  handlePage(e) {
    if (e.target.tagName === 'A') {
      window.scrollTo(0, 0);
      this.props.getProducts(
        'beauty',
        this.props.history.location.pathname.slice(8) || '',
        0,
        e.target.textContent
      );
      e.currentTarget.childNodes.forEach(child => {
        child.style = 'border: 1px solid #dce2eb; color: #dce2eb';
      });
      e.target.style = 'border: 1px solid #647dff; color: #647dff';
    }
  }

  render() {
    return (
      <div>
        <Nav />
        <div className="subNav__wrapper">
          <ul className="subNav">
            <NavLink
              exact
              to="/beauty"
              className="subNav__li"
              activeClassName="subNav__li--selected"
            >
              <li>전체보기</li>
            </NavLink>
            <NavLink
              to="/beauty/filler"
              className="subNav__li"
              activeClassName="subNav__li--selected"
            >
              <li onClick={this.handleCategory}>필러</li>
            </NavLink>
            <NavLink
              to="/beauty/botox"
              className="subNav__li"
              activeClassName="subNav__li--selected"
            >
              <li onClick={this.handleCategory}>보톡스</li>
            </NavLink>
            <NavLink
              to="/beauty/outline"
              className="subNav__li"
              activeClassName="subNav__li--selected"
            >
              <li onClick={this.handleCategory}>윤곽</li>
            </NavLink>
            <NavLink
              to="/beauty/lifting"
              className="subNav__li"
              activeClassName="subNav__li--selected"
            >
              <li onClick={this.handleCategory}>리프팅</li>
            </NavLink>
          </ul>
        </div>
        <main>
          <Banner {...this.props} />
          <div className="beauty__category">
            <h2 className="beauty__title">뷰티시술</h2>
          </div>
          <Product products={this.props.products.productsList} />
          <Pagination handlePage={this.handlePage} {...this.props} />
        </main>
      </div>
    );
  }
}

export default Beauty;
