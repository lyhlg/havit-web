import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import 'styles/css/Header/UserAgree.css';

class UserAgree extends Component {
  render() {
    return (
      <div className="userAgree">
        <div className="userAgree__title">
          <p>havit 이용약관</p>
        </div>
        <div className="userAgree__content">
          <p>이용약관 1조 목적</p>
        </div>
      </div>
    );
  }
}

export default UserAgree;
