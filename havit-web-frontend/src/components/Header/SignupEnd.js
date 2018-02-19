import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class SignupEnd extends Component {
  render() {
    return (
      <div>
        <h2>축하합니다!</h2>
        <h3>회원가입이 완료되었습니다.</h3>
        <button>
          <Link to="/">홈으로</Link>
        </button>
      </div>
    );
  }
}

export default SignupEnd;
