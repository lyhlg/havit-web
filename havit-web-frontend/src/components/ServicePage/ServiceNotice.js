import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import 'styles/css/ServicePage/ServiceNotice.css';

class ServiceNotice extends Component {
  render() {
    return (
      <div className="serviceNotice">
        <div className="serviceNotice__wrapper">
          <div className="serviceNotice__tab">
            <input
              name="keyword"
              className="serviceNotice__right"
              placeholder=" Search"
            />
            <table className="serviceNotice__table">
              <thead>
                <tr>
                  <th>번호</th>
                  <th>제목</th>
                  <th>작성자</th>
                  <th>작성일</th>
                </tr>
              </thead>
            </table>
          </div>
        </div>
      </div>
    );
  }
}

export default ServiceNotice;
