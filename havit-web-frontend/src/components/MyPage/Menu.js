import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Menu extends Component {
  render() {
    return (
      <div>
        <h2>마이페이지</h2>
        <ul>
          <li>
            <Link to="/mypage/reserve">예약내역</Link>
          </li>
          <li>
            <Link to="/mypage/wishList">찜하기</Link>
          </li>
          <li>
            <Link to="/mypage/changeInfo">정보수정</Link>
          </li>
        </ul>
      </div>
    );
  }
}

export default Menu;
