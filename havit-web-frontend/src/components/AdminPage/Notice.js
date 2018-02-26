import React, { Component } from 'react';
import 'styles/css/AdminPage/Notice.css';

class Notice extends Component {
  render() {
    return (
      <div className="notice">
        <div className="notice__wrapper">
          <div className="notice__tab">
            <table className="notice__table">
              <thead>
                <tr>
                  <th>번호</th>
                  <th>제목</th>
                  <th>작성자</th>
                  <th>작성일</th>
                  <th>조회수</th>
                </tr>
              </thead>
              <tbody />
              <td>
                <th>Wassup bro?</th>
              </td>
            </table>
          </div>
        </div>
      </div>
    );
  }
}

export default Notice;
