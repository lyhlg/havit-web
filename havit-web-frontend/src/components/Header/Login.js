import React, { Component } from 'react';
import * as url from 'utils';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      socials: [
        {
          name: '구글',
          url: 'google',
        },
        {
          name: '네이버',
          url: 'naver',
        },
        {
          name: '카카오',
          url: 'kakao',
        },
      ],
    };
    this.loginPopup = this.loginPopup.bind(this);
  }

  loginPopup(url) {
    window.open(`${url.API_DEV}/auth/${url}`, '', 'width=500, height=500');
  }

  render() {
    return (
      <div>
        <input type="text" placeholder="아이디" />
        <input type="text" placeholder="비밀번호" />
        <button type="submit">로그인</button>
        <button type="submit">
          <a href={`${url.API_DEV}/auth/logout`}>로그아웃</a>
        </button>
        <button type="submit">이메일 찾기</button>
        <button type="submit">비밀번호 찾기</button>
        <button type="submit">회원가입</button>
        {this.state.socials.map(social => {
          return (
            <button onClick={() => this.loginPopup(social.url)}>
              {social.name}
            </button>
          );
        })}
      </div>
    );
  }
}

export default Login;
