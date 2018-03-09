import React, { Component } from 'react';
import { logo } from 'assets/img';
import { Link } from 'react-router-dom';
import 'styles/css/Header/SignupEnd.css';

class SignupEnd extends Component {
  render() {
    return (
      <div className="signupEnd">
        <Link to="/" className="signupEnd__home">
          <img src={logo} className="signupEnd__logo" alt="logo" />
        </Link>
        <div className="signupEnd__tab">
          <h2 className="signupEnd__label">축하합니다!</h2>
          <h3 className="signupEnd__label2">회원가입이 완료되었습니다.</h3>
        </div>
        <div className="signupEnd__btn">
          <Link to="/login" className="signupEnd__button">
            로그인으로 이동하기
          </Link>
        </div>
      </div>
    );
  }
}

export default SignupEnd;
