import React, { Component } from 'react';

class Login extends Component {
  render() {
    return (
      <div>
        <input type="text" placeholder="아이디" />
        <input type="text" placeholder="비밀번호" />
        <button type="submit">로그인</button>
        <button type="submit"><a href="http://localhost:8080/auth/logout">로그아웃</a></button>
        <button><a href="http://localhost:8080/auth/google" target="_blank">규굴</a></button>
        <button><a href="http://localhost:8080/auth/naver" target="_blank">네이브</a></button>
        <button><a href="http://localhost:8080/auth/kakao" target="_blank">캬캬오</a></button>
      </div>
    );
  }
}

export default Login;
