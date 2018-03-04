import React, { Component } from 'react';
import { logo } from 'assets/img';
import { Link } from 'react-router-dom';
import 'styles/css/Common/NotFound.css';

class NotFound extends Component {
  render() {
    return (
      <div className="notFound">
        <Link to="/" className="notFound__home">
          <img src={logo} className="notFound__logo" alt="logo" />
        </Link>
        <div className="notFound__tab">
          <p className="notFound__label">주소에 해당하는 페이지가 없습니다.</p>
          <p className="notFound__label2">
            주소를 잘못 입력했을 때 발생하는 에러입니다.
          </p>
        </div>
        <div className="notFound__btn">
          <Link to="/" className="notFound__button">
            홈으로 이동하기
          </Link>
        </div>
      </div>
    );
  }
}

export default NotFound;
