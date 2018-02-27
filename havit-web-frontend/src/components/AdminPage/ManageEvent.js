import React, { Component } from 'react';
import 'styles/css/AdminPage/ManageEvent.css';

class ManageEvent extends Component {
  render() {
    return (
      <div className="manageEvent">
        <div className="manageEvent__wrapper">
          <div className="manageEvent__tab">
            <table className="manageEvent__table">
              <tr>
                <th>우선순위</th>
                <th>상품명</th>
                <th>상품 금액</th>
                <th>판매수</th>
                <th>별점수</th>
                <th>리뷰수</th>
                <th>상태</th>
              </tr>
              <button className="manageEvent__button">이벤트 등록하기</button>
            </table>
          </div>
        </div>
      </div>
    );
  }
}

export default ManageEvent;
