import React, { Component } from 'react';
import { Nav, Banner, Product } from '../index';
import { NavLink } from 'react-router-dom';
import 'styles/css/Beauty/Beauty.css';

class Beauty extends Component {
  componentDidMount() {
    this.props.getProducts('beauty');
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
              <li onClick={() => this.props.getProducts('beauty')}>전체보기</li>
            </NavLink>
            <NavLink
              to="/beauty/piller"
              className="subNav__li"
              activeClassName="subNav__li--selected"
            >
              <li onClick={() => this.props.getProducts('beauty', 'piller')}>
                필러
              </li>
            </NavLink>
            <NavLink
              to="/beauty/botox"
              className="subNav__li"
              activeClassName="subNav__li--selected"
            >
              <li onClick={() => this.props.getProducts('beauty', 'botox')}>
                보톡스
              </li>
            </NavLink>
            <NavLink
              to="/beauty/outline"
              className="subNav__li"
              activeClassName="subNav__li--selected"
            >
              <li onClick={() => this.props.getProducts('beauty', 'outline')}>
                윤곽
              </li>
            </NavLink>
            <NavLink
              to="/beauty/lifting"
              className="subNav__li"
              activeClassName="subNav__li--selected"
            >
              <li onClick={() => this.props.getProducts('beauty', 'lifting')}>
                리프팅
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

export default Beauty;
