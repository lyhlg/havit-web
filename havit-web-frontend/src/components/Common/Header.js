import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../../styles/Common/Header.scss';

class Header extends Component {
  render() {
    return (
      <header className="header">
        <Link to="/login" className="header__link">로그인</Link>
        <Link to="/signin" className="header__link">회원가입</Link>
        <Link to="/service" className="header__link">고객센터</Link>
      </header>
    );
  }
}

export default Header;
