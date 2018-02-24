import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom';
import { logo3 } from 'assets/img';
import { Privacy } from '../index';
import 'styles/css/Header/Signup.css';

class Signup extends Component {
  constructor(props) {
    super(props);

    this.state = {
      privacy: {},
    };
    this.submitPrivacy = this.submitPrivacy.bind(this);
  }

  submitPrivacy() {
    this.setState({
      privacy: {
        name: document.getElementById('email').value,
        password: document.getElementById('password').value,
      },
    });
  }
  render() {
    return (
      <div className="signup">
        <img src={logo3} className="signup__logo" alt="havit" />
        <div className="signup__wrapper">
          <div className="signup__tab">
            <h3 className="signup__label">이메일 주소</h3>
            <input
              id="email"
              type="email"
              className="signup__input"
              placeholder="이메일@도메인"
            />
            <h3 className="signup__label">비밀번호 입력</h3>
            <input
              id="password"
              type="password"
              className="signup__input"
              placeholder="영문, 숫자로 6자 이상 입력해주세요."
            />
            <h3 className="signup__label">비밀번호 확인</h3>
            <input
              type="password"
              className="signup__input"
              placeholder="동일하게 다시 한 번 입력해주세요."
            />
            <button onClick={this.submitPrivacy} className="signup__button">
              <Link to="/privacy" className="signup__btntext">
                계정 생성
              </Link>
            </button>
          </div>
        </div>
        <Route
          path="/privacy"
          render={props => (
            <Privacy privacy={this.state.privacy} {...this.props} />
          )}
        />
      </div>
    );
  }
}

export default Signup;
