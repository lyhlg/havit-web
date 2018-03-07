import React, { Component } from 'react';
import { Nav, Banner, Product, Pagination } from '../index';
import { NavLink } from 'react-router-dom';
import 'styles/css/Beauty/Beauty.css';

class Beauty extends Component {
  constructor(props) {
    super(props);
    this.handlePage = this.handlePage.bind(this);
  }

  componentDidMount() {
    this.props.getProducts(
      'beauty',
      this.props.history.location.pathname.slice(8) || '',
      0,
      1
    );
  }

  handlePage(e) {
    this.props.getProducts(
      'beauty',
      this.props.history.location.pathname.slice(8) || '',
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
              <li
                onClick={() => this.props.getProducts('beauty', 'filler', 0, 1)}
              >
                필러
              </li>
            </NavLink>
            <NavLink
              to="/beauty/botox"
              className="subNav__li"
              activeClassName="subNav__li--selected"
            >
              <li
                onClick={() => this.props.getProducts('beauty', 'botox', 0, 1)}
              >
                보톡스
              </li>
            </NavLink>
            <NavLink
              to="/beauty/outline"
              className="subNav__li"
              activeClassName="subNav__li--selected"
            >
              <li
                onClick={() =>
                  this.props.getProducts('beauty', 'outline', 0, 1)
                }
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
                onClick={() =>
                  this.props.getProducts('beauty', 'lifting', 0, 1)
                }
              >
                리프팅
              </li>
            </NavLink>
          </ul>
        </div>
        <main>
          <Banner />
          <div className="beauty__category">
            <h2 className="beauty__title">뷰티시술</h2>
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

export default Beauty;
