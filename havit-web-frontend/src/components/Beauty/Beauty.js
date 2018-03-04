import React, { Component } from 'react';
import { Nav, Banner, Product } from '../index';
import { NavLink } from 'react-router-dom';
import 'styles/css/Beauty/Beauty.css';

class Beauty extends Component {
  componentDidMount() {
    this.props.getProducts(
      this.props.history.location.pathname.slice(1, 7),
      this.props.history.location.pathname.slice(8),
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
              to="/beauty"
              className="subNav__li"
              activeClassName="subNav__li--selected"
            >
              <li onClick={() => this.props.getProducts('beauty', '', 1)}>
                전체보기
              </li>
            </NavLink>
            <NavLink
              to="/beauty/filler"
              className="subNav__li"
              activeClassName="subNav__li--selected"
            >
              <li onClick={() => this.props.getProducts('beauty', 'filler', 1)}>
                필러
              </li>
            </NavLink>
            <NavLink
              to="/beauty/botox"
              className="subNav__li"
              activeClassName="subNav__li--selected"
            >
              <li onClick={() => this.props.getProducts('beauty', 'botox', 1)}>
                보톡스
              </li>
            </NavLink>
            <NavLink
              to="/beauty/outline"
              className="subNav__li"
              activeClassName="subNav__li--selected"
            >
              <li
                onClick={() => this.props.getProducts('beauty', 'outline', 1)}
              >
                윤곽
              </li>
            </NavLink>
            <NavLink
              to="/beauty/lifting"
              className="subNav__li"
              activeClassName="subNav__li--selected"
            >
              <li
                onClick={() => this.props.getProducts('beauty', 'lifting', 1)}
              >
                리프팅
              </li>
            </NavLink>
          </ul>
        </div>
        <main>
          <Banner />
          <div className="beauty__category">
            <h2>뷰티시술</h2>
          </div>
          <Product products={this.props.products.productsList} />
        </main>
      </div>
    );
  }
}

export default Beauty;
