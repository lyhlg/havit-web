import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import 'styles/css/Common/Nav.css';

class Nav extends Component {
  render() {
    return (
      <nav className="nav">
        <div className="nav__wrapper">
          <NavLink
            exact
            to="/"
            className="nav__list"
            activeClassName="nav__list--selected"
          >
            전체보기
          </NavLink>
          <NavLink
            to="/skin"
            className="nav__list"
            activeClassName="nav__list--selected"
          >
            피부시술
          </NavLink>
          <NavLink
            to="/beauty"
            className="nav__list"
            activeClassName="nav__list--selected"
          >
            뷰티시술
          </NavLink>
          <NavLink
            to="/event"
            className="nav__list"
            activeClassName="nav__list--selected"
          >
            이벤트
          </NavLink>
        </div>
      </nav>
    );
  }
}

export default Nav;
