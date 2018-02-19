import React, { Component } from 'react';
import * as url from 'utils';
import 'styles/css/Common/Login.css';

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

  loginPopup(social) {
    window.open(`${url.API_DEV}/auth/${social}`, '', 'width=500, height=500');
  }

  render() {
    return (
      <div className="login">
        <div className="login__find">
          <button type="submit">이메일 찾기</button>
          <button type="submit">비밀번호 찾기</button>
          <button type="submit">회원가입</button>
        </div>
        <div className="login__wrapper">
          <div className="login__input">
            <h3>이메일 주소</h3>
            <input type="text" placeholder="이메일@도메인" />
            <h3>비밀번호 입력</h3>
            <input type="text" placeholder="비밀번호" />
          </div>
          <div className="login__button">
            <button type="submit">로그인</button>
            <button type="submit">
              <a href={`${url.API_DEV}/auth/logout`}>로그아웃</a>
            </button>
          </div>
          <div className="social__button">
            {this.state.socials.map(social => {
              return (
                <button onClick={() => this.loginPopup(social.url)}>
                  {social.name}
                </button>
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
