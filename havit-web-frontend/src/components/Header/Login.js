import React, { Component } from 'react';
import { reallogo } from 'assets/img';
import { google } from 'assets/img';
import { kakao } from 'assets/img';
import { Route } from 'react-router-dom';
import 'styles/css/Common/Login.css';
import { GoogleLogin } from 'react-google-login';
import KakaoLogin from 'react-kakao-login';

class Login extends Component {
  constructor(props) {
    super(props);
    this.handleKeyPress = this.handleKeyPress.bind(this);
    this.submitLogin = this.submitLogin.bind(this);
  }

  handleKeyPress(e) {
    console.log(e);
    if (e.key === 'Enter') this.submitLogin();
  }

  submitLogin() {
    this.props.getLogin(
      res => {
        if (res.data.Users.length === 1) {
          localStorage.setItem('email', res.data.Users[0].user_id_email);
          localStorage.setItem('code', res.data.Users[0].level);
          this.props.history.push('/');
        } else {
          alert('아이디 또는 비번 잘못입력');
        }
      },
      document.getElementById('username').value,
      document.getElementById('password').value
    );
  }
  authLoginGoogleSucc(res) {
    this.props.addUserInfo(
      data => {
        const phone = data.data.addUserInfo.phone;
        const code = data.data.addUserInfo.level;
        if (phone) {
          if (localStorage.getItem('email')) localStorage.removeItem('email');
          if (localStorage.getItem('code')) localStorage.removeItem('code');
          localStorage.setItem('email', res.profileObj.email);
          localStorage.setItem('code', code);
          this.props.history.push('/');
        } else {
          if (localStorage.getItem('temp')) localStorage.removeItem('temp');
          localStorage.setItem('temp', res.profileObj.email);
          localStorage.setItem('auth', 'google');
          this.props.history.push('/privacy');
        }
      },
      res.profileObj.email,
      '',
      'google',
      res.profileObj.name
    );
  }

  authLoginGoogleFail(res) {
    console.log(res);
    this.props.history.push('/login');
  }

  authLoginKakaoSucc(res) {
    this.props.addUserInfo(
      data => {
        const phone = data.data.addUserInfo.phone;
        const code = data.data.addUserInfo.level;
        if (phone) {
          if (localStorage.getItem('email')) localStorage.removeItem('email');
          if (localStorage.getItem('code')) localStorage.removeItem('code');
          localStorage.setItem('email', res.profile.kaccount_email);
          localStorage.setItem('code', code);
          this.props.history.push('/');
        } else {
          if (localStorage.getItem('temp')) localStorage.removeItem('temp');
          localStorage.setItem('temp', res.profile.kaccount_email);
          localStorage.setItem('auth', 'kakao');
          this.props.history.push('/privacy');
        }
      },
      res.profile.kaccount_email,
      '',
      'kakao',
      res.profile.properties.nickname
    );
  }
  authLoginKakaoFail(res) {
    console.log(res);
    this.props.history.push('/login');
  }

  render() {
    console.log(this.props);
    return (
      <div className="login">
        <img src={reallogo} className="login__logo" alt="logo" />
        <div className="login__wrapper">
          <div className="login__tab">
            <h3 className="login__label">이메일 주소</h3>
            <input
              type="text"
              id="username"
              className="login__input"
              placeholder="이메일@도메인"
            />
            <h3 className="login__label">비밀번호 입력</h3>
            <input
              type="password"
              id="password"
              className="login__input"
              placeholder="비밀번호"
              onKeyPress={this.handleKeyPress}
            />
            <button
              type="submit"
              className="login__btn"
              onClick={this.submitLogin}
            >
              로그인
            </button>
            <div className="social__button">
              <GoogleLogin
                className="social__google"
                clientId="235629451128-6epmo55kkdeiah4phs7psth5e09g1ujj.apps.googleusercontent.com"
                onSuccess={this.authLoginGoogleSucc.bind(this)}
                onFailure={this.authLoginGoogleFail.bind(this)}
              >
                <img className="social__google" src={google} alt="logo" />
              </GoogleLogin>
              <KakaoLogin
                jsKey="268fb9ee81f5cc98b81d5e03e42fdead"
                onSuccess={this.authLoginKakaoSucc.bind(this)}
                onFailure={this.authLoginKakaoFail.bind(this)}
                getProfile
              />
              <img src={google} className="social__google" alt="logo" />
              <img src={kakao} className="social__kakao" alt="logo" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
