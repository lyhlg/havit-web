import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { logo } from 'assets/img';
import * as url from 'utils';
import 'styles/css/Common/Header.css';

class Header extends Component {
  handleLogout() {
    localStorage.removeItem('email');
    if (localStorage.getItem('kakao_32d45b3f136b81e89905f794f933f564'))
      localStorage.removeItem('kakao_32d45b3f136b81e89905f794f933f564');
  }

  render() {
    return (
      <header className="header">
        <h1 className="header__left">
          <Link to="/" className="header__home">
            <img src={logo} className="header__logo" alt="해빗 로고" />
          </Link>
        </h1>
        {localStorage.getItem('email') ? (
          <div className="header__right">
            <Link
              to="/"
              className="header__link"
              onClick={this.handleLogout.bind(this)}
            >
              로그아웃
            </Link>
            <Link to="/" className="header__link">
              고객센터
            </Link>
            <Link to="/mypage/reserve" className="header__link">
              마이페이지
            </Link>
          </div>
        ) : (
          <div className="header__right">
            <Link to="/hospitalpage" className="header__link">
              병원관리
            </Link>
            <Link to="/login" className="header__link">
              로그인
            </Link>
            <Link to="/signup" className="header__link">
              회원가입
            </Link>
            <Link to="/" className="header__link">
              고객센터
            </Link>
          </div>
        )}
      </header>
    );
  }
}

export default Header;
