import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { logo2 } from 'assets/img';
import '../../styles/Common/Nav.scss';

class Nav extends Component {
  render() {
    return (
      <nav className="nav">
        <div className="nav__wrapper">
          <div className="nav__top">
            <NavLink to="/" className="nav__home">
              <img src={logo2} className="nav__logo" alt="해빗 로고"/>
            </NavLink>
            <input type="text" className="nav__search"/>
          </div>
          <div className="nav__bottom">
            <NavLink to="/all" className="nav__list">전체보기</NavLink>
            <NavLink to="/skin" className="nav__list">피부시술</NavLink>
            <NavLink to="/beauty" className="nav__list">뷰티시술</NavLink>
            <NavLink to="/event" className="nav__list">이벤트</NavLink>
          </div>
        </div>
      </nav>
    );
  }
}

export default Nav;
