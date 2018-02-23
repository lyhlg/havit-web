import React, { Component } from 'react';
import * as url from 'utils';
import { reallogo } from 'assets/img';
import 'styles/css/Common/Login.css';
import axios from 'axios';
import { GoogleLogin } from 'react-google-login';

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
    this.loginPage = this.loginPage.bind(this);
  }
  authLoginGoogleSucc(res) {
    console.log(res);
  }
  authLoginGoogleFail(res) {
    console.log(res);
  }

  loginPage(social) {
    console.log('sad');
    axios(`${url.API_DEV}/auth/${social}`, {
      method: 'GET',
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json',
      },
    });
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
              <GoogleLogin
                clientId="235629451128-6epmo55kkdeiah4phs7psth5e09g1ujj.apps.googleusercontent.com"
                onSuccess={this.authLoginGoogleSucc.bind(this)}
                onFailure={this.authLoginGoogleFail.bind(this)}
              >
                <span>Login</span>
              </GoogleLogin>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
