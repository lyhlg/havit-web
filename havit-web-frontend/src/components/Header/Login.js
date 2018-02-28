import React, { Component } from 'react';
import { reallogo } from 'assets/img';
import { Route } from 'react-router-dom';
import 'styles/css/Common/Login.css';
import { GoogleLogin } from 'react-google-login';
import KakaoLogin from 'react-kakao-login';

class Login extends Component {
  authLoginGoogleSucc(res) {
    this.props.addUser(
      res.profileObj.email,
      Number(res.profileObj.googleId),
      res.profileObj.name
    );
    setTimeout(() => {
      this.props.getUserInfo(res.profileObj.email);
    }, 1000);
    setTimeout(() => {
      const phone = this.props.newUser.newUser.phone;
      const code = this.props.userInfo.userInfo[0].level;
      if (code !== null) {
        if (localStorage.getItem('code')) localStorage.removeItem('code');
        localStorage.setItem('code', code);
      }
      if (phone !== null) {
        if (localStorage.getItem('email')) localStorage.removeItem('email');
        localStorage.setItem('email', res.profileObj.email);
        this.props.history.push('/');
      } else {
        if (localStorage.getItem('temp')) localStorage.removeItem('temp');
        localStorage.setItem('temp', res.profileObj.email);
        this.props.history.push('/privacy');
      }
    }, 2000);
  }

  authLoginGoogleFail(res) {
    console.log(res);
    this.props.history.push('/login');
  }

  authLoginKakaoSucc(res) {
    this.props.addUser(
      res.profile.kaccount_email,
      res.profile.id,
      res.profile.properties.nickname
    );
    setTimeout(() => {
      this.props.getUserInfo(res.profile.kaccount_email);
    }, 1000);
    setTimeout(() => {
      const phone = this.props.newUser.newUser.phone;
      const code = this.props.userInfo.userInfo[0].level;
      if (code !== null) {
        if (localStorage.getItem('code')) localStorage.removeItem('code');
        localStorage.setItem('code', code);
      }
      if (phone !== null) {
        if (localStorage.getItem('email')) localStorage.removeItem('email');
        localStorage.setItem('email', res.profile.kaccount_email);
        this.props.history.push('/');
      } else {
        if (localStorage.getItem('temp')) localStorage.removeItem('temp');
        localStorage.setItem('temp', res.profile.kaccount_email);
        this.props.history.push('/privacy');
      }
    }, 2000);
  }
  authLoginKakaoFail(res) {
    console.log(res);
    this.props.history.push('/login');
  }

  checkUserInfo(res) {
    return this.props.getUserInfo(res.profileObj.email);
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
              name="username"
              className="login__input"
              placeholder="이메일@도메인"
            />
            <h3 className="login__label">비밀번호 입력</h3>
            <input
              type="text"
              name="password"
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
              <KakaoLogin
                jsKey="268fb9ee81f5cc98b81d5e03e42fdead"
                onSuccess={this.authLoginKakaoSucc.bind(this)}
                onFailure={this.authLoginKakaoFail.bind(this)}
                getProfile
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
