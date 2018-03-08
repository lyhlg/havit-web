import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import 'styles/css/MyPage/Menu.css';

class Menu extends Component {
  render() {
    return (
      <div className="myPageMenu">
        <div className="myPageMenu__wrapper">
          <h2 className="myPageMenu__name">마이페이지</h2>
          <div className="myPageMenu__tab">
            {localStorage.getItem('code') === '3' && (
              <NavLink
                to="/mypage/reserve"
                className="myPageMenu__button"
                activeClassName="myPageMenu__button--selected"
              >
                예약내역
              </NavLink>
            )}
            {localStorage.getItem('code') === '3' && (
              <NavLink
                to="/mypage/wishList"
                className="myPageMenu__button"
                activeClassName="myPageMenu__button--selected"
              >
                찜하기
              </NavLink>
            )}
            <NavLink
              to="/mypage/changeInfo"
              className="myPageMenu__button"
              activeClassName="myPageMenu__button--selected"
            >
              정보수정
            </NavLink>
          </div>
        </div>
      </div>
    );
  }
}

export default Menu;
