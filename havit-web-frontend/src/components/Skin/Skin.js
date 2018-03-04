import React, { Component } from 'react';
import { Nav, Banner, Product } from '../index';
import { NavLink } from 'react-router-dom';
import 'styles/css/Skin/Skin.css';

class Skin extends Component {
  componentDidMount() {
    this.props.getProducts(
      this.props.history.location.pathname.slice(1, 5),
      this.props.history.location.pathname.slice(6),
      1
    );
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
              <li onClick={() => this.props.getProducts('skin', '', 1)}>
                전체보기
              </li>
            </NavLink>
            <NavLink
              to="/skin/laser"
              className="subNav__li"
              activeClassName="subNav__li--selected"
            >
              <li onClick={() => this.props.getProducts('skin', 'laser', 1)}>
                피부레이저
              </li>
            </NavLink>
            <NavLink
              to="/skin/scaling"
              className="subNav__li"
              activeClassName="subNav__li--selected"
            >
              <li onClick={() => this.props.getProducts('skin', 'scaling', 1)}>
                스케일링
              </li>
            </NavLink>
            <NavLink
              to="/skin/peeling"
              className="subNav__li"
              activeClassName="subNav__li--selected"
            >
              <li onClick={() => this.props.getProducts('skin', 'peeling', 1)}>
                필링
              </li>
            </NavLink>
            <NavLink
              to="/skin/waxing"
              className="subNav__li"
              activeClassName="subNav__li--selected"
            >
              <li onClick={() => this.props.getProducts('skin', 'waxing', 1)}>
                제모
              </li>
            </NavLink>
            <NavLink
              to="/skin/semi"
              className="subNav__li"
              activeClassName="subNav__li--selected"
            >
              <li onClick={() => this.props.getProducts('skin', 'semi', 1)}>
                반영구
              </li>
            </NavLink>
            <NavLink
              to="/skin/shot"
              className="subNav__li"
              activeClassName="subNav__li--selected"
            >
              <li onClick={() => this.props.getProducts('skin', 'shot', 1)}>
                미용주사
              </li>
            </NavLink>
          </ul>
        </div>
        <main>
          <Banner />
          <div className="skin__category">
            <h2>피부시술</h2>
          </div>
          <Product />
        </main>
      </div>
    );
  }
}

export default Skin;
