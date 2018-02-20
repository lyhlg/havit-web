import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { logo } from 'assets/img';
import * as url from 'utils';
import 'styles/css/Common/Header.css';

class Header extends Component {
  render() {
    const cookie = document.cookie || '';
    return (
      <header className="header">
        {console.log('sad', cookie)}
        <h1 className="header__left">
          <Link to="/" className="header__home">
            <img src={logo} className="header__logo" alt="해빗 로고" />
          </Link>
        </h1>
        {cookie.includes('userCustomToken') ? (
          <div className="header__right">
            <a href={`${url.API_DEV}/auth/logout`} className="header__link">
              로그아웃
            </a>
            <Link to="/service" className="header__link">
              고객센터
            </Link>
            <Link to="/mypage/reserve" className="header__link">
              마이페이지
            </Link>
          </div>
        ) : (
          <div className="header__right">
            <Link to="/login" className="header__link">
              로그인
            </Link>
            <Link to="/signup" className="header__link">
              회원가입
            </Link>
            <Link to="/service" className="header__link">
              고객센터
            </Link>
          </div>
        )}
      </header>
    );
  }
}

export default Header;
