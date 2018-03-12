import React, { Component } from 'react';
import { Nav, Banner, Product, Pagination } from '../index';
import { NavLink } from 'react-router-dom';
import 'styles/css/Skin/Skin.css';

class Skin extends Component {
  constructor(props) {
    super(props);
    this.handleCategory = this.handleCategory.bind(this);
    this.handlePage = this.handlePage.bind(this);
  }

  componentDidMount() {
    window.scrollTo(0, 0);
    this.props.getProducts(
      'skin',
      this.props.history.location.pathname.slice(6) || '',
      0,
      1
    );
    this.props.getBanners();
  }

  handleCategory(e) {
    this.props.getProducts(
      'skin',
      e.currentTarget.parentNode.pathname.slice(6),
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
        'skin',
        this.props.history.location.pathname.slice(6) || '',
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
              to="/skin"
              className="subNav__li"
              activeClassName="subNav__li--selected"
            >
              <li onClick={this.handleCategory}>전체보기</li>
            </NavLink>
            <NavLink
              to="/skin/laser"
              className="subNav__li"
              activeClassName="subNav__li--selected"
            >
              <li onClick={this.handleCategory}>피부레이저</li>
            </NavLink>
            <NavLink
              to="/skin/scaling"
              className="subNav__li"
              activeClassName="subNav__li--selected"
            >
              <li onClick={this.handleCategory}>스케일링</li>
            </NavLink>
            <NavLink
              to="/skin/peeling"
              className="subNav__li"
              activeClassName="subNav__li--selected"
            >
              <li onClick={this.handleCategory}>필링</li>
            </NavLink>
            <NavLink
              to="/skin/waxing"
              className="subNav__li"
              activeClassName="subNav__li--selected"
            >
              <li onClick={this.handleCategory}>제모</li>
            </NavLink>
            <NavLink
              to="/skin/semi"
              className="subNav__li"
              activeClassName="subNav__li--selected"
            >
              <li onClick={this.handleCategory}>반영구</li>
            </NavLink>
            <NavLink
              to="/skin/shot"
              className="subNav__li"
              activeClassName="subNav__li--selected"
            >
              <li onClick={this.handleCategory}>미용주사</li>
            </NavLink>
            <NavLink
              to="/skin/acne"
              className="subNav__li"
              activeClassName="subNav__li--selected"
            >
              <li onClick={this.handleCategory}>여드름</li>
            </NavLink>
          </ul>
        </div>
        <main>
          <Banner {...this.props} />
          <div className="skin__category">
            <h2 className="skin__title">피부시술</h2>
          </div>
          <Product products={this.props.products.productsList} />
          <Pagination handlePage={this.handlePage} {...this.props} />
        </main>
      </div>
    );
  }
}

export default Skin;
