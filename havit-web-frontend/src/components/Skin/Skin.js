import React, { Component } from 'react';
import { Nav, Banner, Product } from '../index';
import { NavLink } from 'react-router-dom';
import 'styles/css/Skin/Skin.css';

class Skin extends Component {
  componentDidMount() {
    this.props.getProducts('skin');
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
              <li onClick={() => this.props.getProducts('skin')}>전체보기</li>
            </NavLink>
            <NavLink
              to="/skin/laser"
              className="subNav__li"
              activeClassName="subNav__li--selected"
            >
              <li onClick={() => this.props.getProducts('skin', 'laser')}>
                피부레이저
              </li>
            </NavLink>
            <NavLink
              to="/skin/scaling"
              className="subNav__li"
              activeClassName="subNav__li--selected"
            >
              <li onClick={() => this.props.getProducts('skin', 'scaling')}>
                스케일링
              </li>
            </NavLink>
            <NavLink
              to="/skin/pilling"
              className="subNav__li"
              activeClassName="subNav__li--selected"
            >
              <li onClick={() => this.props.getProducts('skin', 'pilling')}>
                필링
              </li>
            </NavLink>
            <NavLink
              to="/skin/waxing"
              className="subNav__li"
              activeClassName="subNav__li--selected"
            >
              <li onClick={() => this.props.getProducts('skin', 'waxing')}>
                제모
              </li>
            </NavLink>
            <NavLink
              to="/skin/semi"
              className="subNav__li"
              activeClassName="subNav__li--selected"
            >
              <li onClick={() => this.props.getProducts('skin', 'semi')}>
                반영구
              </li>
            </NavLink>
            <NavLink
              to="/skin/shot"
              className="subNav__li"
              activeClassName="subNav__li--selected"
            >
              <li onClick={() => this.props.getProducts('skin', 'shot')}>
                미용주사
              </li>
            </NavLink>
          </ul>
        </div>
        <main>
          <Banner />
          <Product products={this.props.products.productsList} />
        </main>
      </div>
    );
  }
}

export default Skin;
