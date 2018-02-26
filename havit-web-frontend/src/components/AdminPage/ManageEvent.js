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
                <th>상태</th>
                <th>상품명</th>
                <th>상품금액</th>
                <th>총 판매수</th>
                <th>별점수</th>
              </tr>
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

export default ManageEvent;
