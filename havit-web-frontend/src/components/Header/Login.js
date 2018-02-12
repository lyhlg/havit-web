import React, { Component } from 'react';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state={
      socials: [
        {
          name: '구글',
          url: 'google'
        },
        {
          name: '네이버',
          url: 'naver'
        },
        {
          name: '카카오',
          url: 'kakao'
        }
      ]
    }
    this.loginPopup = this.loginPopup.bind(this);
  }

  loginPopup(url) {
    window.open(`http://localhost:8080/auth/${url}`, '', 'width=500, height=500')
  }
  
  render() {
    return (
      <div>
        <input type="text" placeholder="아이디" />
        <input type="text" placeholder="비밀번호" />
        <button type="submit">로그인</button>
        <button type="submit"><a href="http://localhost:8080/auth/logout">로그아웃</a></button>
        {this.state.socials.map(social => {
          return <button onClick={() => this.loginPopup(social.url)}>{social.name}</button>
        })}
      </div>
    );
  }
}

export default Login;