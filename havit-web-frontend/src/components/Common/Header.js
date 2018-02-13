import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import 'styles/css/Common/Header.css';

class Header extends Component {
  render() {
    return (
      <header className="header">
        <Link to="/login" className="header__link">
          로그인
        </Link>
        <Link to="/signin" className="header__link">
          회원가입
        </Link>
        <Link to="/service" className="header__link">
          고객센터
        </Link>
        <Link to="/mypage/reserve" className="header__link">
          마이페이지
        </Link>
      </header>
    );
  }
}

export default Header;
