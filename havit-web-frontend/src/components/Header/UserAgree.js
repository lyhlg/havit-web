import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import 'styles/css/Header/UserAgree.css';

class UserAgree extends Component {
  render() {
    return (
      <div className="userAgree">
        <div>
          <p className="userAgree__title">havit 이용약관</p>
        </div>
        <div className="userAgree__tab">
          <p className="userAgree__content">이용약관 1조 목적</p>
          <p>
            이 약관은 ㈜Nomad Donut이 운영하는 애플리케이션 havit 시스템을
            이용하는 ‘havit’ MOU체결 병의원(이하 ‘제휴병의원’)과 이용자의
            권리•의무 및 책임사항을 규정함을 목적으로 합니다.
          </p>
        </div>
      </div>
    );
  }
}

export default UserAgree;
