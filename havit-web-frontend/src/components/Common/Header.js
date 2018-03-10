import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { logo } from 'assets/img';
import 'styles/css/Common/Header.css';

class Header extends Component {
  constructor(props) {
    super(props);
    this.handleLogout = this.handleLogout.bind(this);
    this.getSearch = this.getSearch.bind(this);
  }

  handleLogout() {
    this.props.userInfo.userInfo = [];
    this.props.newUserInfo.newUserInfo = [];
    localStorage.removeItem('email');
    localStorage.removeItem('code');
    if (localStorage.getItem('kakao_32d45b3f136b81e89905f794f933f564'))
      localStorage.removeItem('kakao_32d45b3f136b81e89905f794f933f564');
  }

  getSearch(e) {
    if (e.key === 'Enter') {
      this.props.history.push('/search');
      this.props.getSearch(
        document.getElementById('filter').value,
        document.getElementById('keyword').value
      );
    }
  }

  render() {
    console.log(this.props);
    let header;
    if (!localStorage.getItem('code')) {
      header = (
        <div className="header__right">
          <NavLink
            to="/login"
            className="header__link"
            activeClassName="header__link--selected"
          >
            로그인
          </NavLink>
          <NavLink
            to="/signup"
            className="header__link"
            activeClassName="header__link--selected"
          >
            회원가입
          </NavLink>
          <NavLink
            to="/servicePage/serviceCenter"
            className="header__link"
            activeClassName="header__link--selected"
          >
            고객센터
          </NavLink>
        </div>
      );
    } else if (localStorage.getItem('code') === '1') {
      header = (
        <div className="header__right">
          <NavLink
            to="/adminPage/manageHospital"
            className="header__link"
            activeClassName="header__link--selected"
          >
            관리자페이지
          </NavLink>
          <NavLink
            to="/"
            className="header__link"
            onClick={this.handleLogout.bind(this)}
          >
            로그아웃
          </NavLink>
          <NavLink
            to="/mypage/changeInfo"
            className="header__link"
            activeClassName="header__link--selected"
          >
            정보수정
          </NavLink>
          <NavLink
            to="/servicePage/serviceCenter"
            className="header__link"
            activeClassName="header__link--selected"
          >
            고객센터
          </NavLink>
        </div>
      );
    } else if (localStorage.getItem('code') === '2') {
      header = (
        <div className="header__right">
          <NavLink
            to="/hospitalPage/dashBoard"
            className="header__link"
            activeClassName="header__link--selected"
          >
            병원페이지
          </NavLink>
          <NavLink to="/" className="header__link" onClick={this.handleLogout}>
            로그아웃
          </NavLink>
          <NavLink
            to="/mypage/changeInfo"
            className="header__link"
            activeClassName="header__link--selected"
          >
            정보수정
          </NavLink>
          <NavLink
            to="/servicePage/serviceCenter"
            className="header__link"
            activeClassName="header__link--selected"
          >
            고객센터
          </NavLink>
        </div>
      );
    } else {
      header = (
        <div className="header__right">
          <NavLink
            to="/"
            className="header__link"
            onClick={this.handleLogout.bind(this)}
          >
            로그아웃
          </NavLink>
          <NavLink
            to="/mypage/reserve"
            className="header__link"
            activeClassName="header__link--selected"
          >
            마이페이지
          </NavLink>
          <NavLink
            to="/servicePage/serviceCenter"
            className="header__link"
            activeClassName="header__link--selected"
          >
            고객센터
          </NavLink>
        </div>
      );
    }
    return (
      <header className="header">
        <h1 className="header__left">
          <NavLink to="/" className="header__home">
            <img src={logo} className="header__logo" alt="해빗 로고" />
          </NavLink>
        </h1>
        <div className="search">
          <select id="filter" className="search__filter">
            <option value="product">상품검색</option>
            <option value="hospital">병원검색</option>
          </select>
          <input
            id="keyword"
            className="search__input"
            type="text"
            onKeyPress={this.getSearch}
            placeholder="엔터를 눌러 검색"
          />
        </div>
        {header}
      </header>
    );
  }
}

export default Header;
