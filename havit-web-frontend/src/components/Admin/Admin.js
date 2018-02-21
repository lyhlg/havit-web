import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Admin extends Component {
  render() {
    return (
      <div className="admin">
        <div className="admin__wrapper">
          <div className="admin__tab">
            <h2 className="admin__title">상품 등록</h2>
            <h3 className="admin__label">대분류</h3>
            <select className="admin__dropdown">
              <option>전체보기</option>
              <option>피부시술</option>
              <option>뷰티시술</option>
              <option>이벤트</option>
            </select>
            <h3 className="admin__label">소분류</h3>
            <select className="admin__dropdown">
              <option>피부레이저</option>
              <option>스케일링</option>
              <option>필링</option>
              <option>제모</option>
              <option>반영구</option>
              <option>미용주사</option>
            </select>
            <h3 className="admin__label">소분류</h3>
          </div>
        </div>
      </div>
    );
  }
}

export default Admin;
