import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class HospitalMenu extends Component {
  render() {
    return (
      <div>
        <h2>병원관리</h2>
        <ul>
          <li>
            <Link to="/hospitalPage/customerInfo">고객정보</Link>
          </li>
          <li>
            <Link to="/hospitalPage/uploadProduct">상품등록</Link>
          </li>
          <li>
            <Link to="/hospitalPage/manageProduct">상품관리</Link>
          </li>
          <li>
            <Link to="/hospitalPage/balance">정산</Link>
          </li>
        </ul>
      </div>
    );
  }
}

export default HospitalMenu;
