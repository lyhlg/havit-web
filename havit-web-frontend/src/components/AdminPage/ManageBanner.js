import React, { Component } from 'react';
import 'styles/css/AdminPage/ManageBanner.css';

class ManageBanner extends Component {
  render() {
    return (
      <div>
        <div className="manageBanner">
          <div className="manageBanner__wrapper">
            <div className="manageBanner__tab">
              <table border="1">
                <tr>
                  <th>상태</th>
                  <th>대분류</th>
                  <th>소분류</th>
                  <th>상품명</th>
                  <th>상품금액</th>
                  <th>총 판매수</th>
                  <th>별점수</th>
                  <th>-</th>
                </tr>
                <td>
                  <th>Wassup bro?</th>
                </td>
              </table>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ManageBanner;
