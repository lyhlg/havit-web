import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import * as url from 'utils';

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
      <div>
        <h2>회원정보 입력</h2>
        <h3>이메일</h3>
        <input id="email" type="email" placeholder="이메일@도메인" />
        <button type="submit" method="get" onClick={this.handleSubmitEmail}>
          이메일 인증하기
        </button>
        <h4>이메일 인증번호</h4>
        <h6>이메일 인증번호를 입력해주세요.</h6>
        <input type="text" placeholder="인증번호" />
        <h3>비밀번호 (6~ 15자)</h3>
        <input type="password" placeholder="비밀번호" />
        <h6>영문, 숫자로 6자 이상 입력해주세요.</h6>
        <h3>비밀번호 확인</h3>
        <input type="password" placeholder="비밀번호 확인" />
        <h6>동일하게 다시 한 번 입력해주세요.</h6>
        <button>
          <Link to="/privacy">계정 생성</Link>
        </button>
        <button>취소</button>
      </div>
    );
  }
}

export default Signup;