import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import * as url from 'utils';
import { logo3 } from 'assets/img';
import 'styles/css/Header/Signup.css';

class Signup extends Component {
  constructor(props) {
    super(props);
    this.handleSubmitEmail = this.handleSubmitEmail.bind(this);
  }

  handleSubmitEmail(email) {
    window.open(
      `${url.API_DEV}/auth/mailauth?to=${
        document.getElementById('email').value
      }`
    );
  }

  render() {
    return (
      <div className="signup">
        <img src={logo3} className="signup__logo" alt="havit" />
        <main className="signup__wrapper">
          <h3 className="signup__emailword">이메일 주소</h3>
          <input
            type="text"
            className="signup__emailbox"
            placeholder="이메일@도메인"
          />
          <h3 className="signup__psw">비밀번호 입력</h3>
          <input
            type="text"
            className="signup__pswbox"
            placeholder="영문, 숫자로 6자 이상 입력해주세요."
          />
          <h3 className="signup__pswcheck">비밀번호 확인</h3>
          <input
            type="text"
            className="signup__pswbox"
            placeholder="동일하게 다시 한 번 입력해주세요."
          />
          <button className="signup__button">
            <Link to="/privacy">계정 생성</Link>
          </button>
        </main>
      </div>
    );
  }
}

export default Signup;
