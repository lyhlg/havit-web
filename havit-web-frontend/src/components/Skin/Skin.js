import React, { Component } from 'react';
import { Nav, Banner, Product, Pagination } from '../index';
import { NavLink } from 'react-router-dom';
import 'styles/css/Skin/Skin.css';

class Skin extends Component {
  constructor(props) {
    super(props);
    this.handlePage = this.handlePage.bind(this);
  }

  componentDidMount() {
    this.props.getProducts(
      'skin',
      this.props.history.location.pathname.slice(6) || '',
      0,
      1
    );
  }

  handlePage(e) {
    this.props.getProducts(
      'skin',
      this.props.history.location.pathname.slice(6) || '',
      0,
      e.target.textContent
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
              <li onClick={() => this.props.getProducts('skin', '', 0, 1)}>
                전체보기
              </li>
            </NavLink>
            <NavLink
              to="/skin/laser"
              className="subNav__li"
              activeClassName="subNav__li--selected"
            >
              <li onClick={() => this.props.getProducts('skin', 'laser', 0, 1)}>
                피부레이저
              </li>
            </NavLink>
            <NavLink
              to="/skin/scaling"
              className="subNav__li"
              activeClassName="subNav__li--selected"
            >
              <li
                onClick={() => this.props.getProducts('skin', 'scaling', 0, 1)}
              >
                스케일링
              </li>
            </NavLink>
            <NavLink
              to="/skin/peeling"
              className="subNav__li"
              activeClassName="subNav__li--selected"
            >
              <li
                onClick={() => this.props.getProducts('skin', 'peeling', 0, 1)}
              >
                필링
              </li>
            </NavLink>
            <NavLink
              to="/skin/waxing"
              className="subNav__li"
              activeClassName="subNav__li--selected"
            >
              <li
                onClick={() => this.props.getProducts('skin', 'waxing', 0, 1)}
              >
                제모
              </li>
            </NavLink>
            <NavLink
              to="/skin/semi"
              className="subNav__li"
              activeClassName="subNav__li--selected"
            >
              <li onClick={() => this.props.getProducts('skin', 'semi', 0, 1)}>
                반영구
              </li>
            </NavLink>
            <NavLink
              to="/skin/shot"
              className="subNav__li"
              activeClassName="subNav__li--selected"
            >
              <li onClick={() => this.props.getProducts('skin', 'shot', 0, 1)}>
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
          <Product products={this.props.products.productsList} />
          <Pagination
            handlePage={this.handlePage}
            max={
              this.props.products.productsList[0] &&
              this.props.products.productsList[0].maxPage
            }
          />
        </main>
      </div>
    );
  }
}

export default Skin;
