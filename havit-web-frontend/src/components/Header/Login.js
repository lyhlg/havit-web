import React, { Component } from 'react';
import * as url from 'utils';
import { reallogo } from 'assets/img';
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
        <img src={reallogo} className="login__logo" alt="logo" />
        <div className="login__wrapper">
          <div className="login__tab">
            <h3 className="login__label">이메일 주소</h3>
            <input
              type="text"
              className="login__input"
              placeholder="이메일@도메인"
            />
            <h3 className="login__label">비밀번호 입력</h3>
            <input
              type="text"
              className="login__input"
              placeholder="비밀번호"
            />
            <button type="submit" className="login__btn">
              로그인
            </button>
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
      </div>
    );
  }
}

export default Login;
