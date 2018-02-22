import React, { Component } from 'react';
import 'styles/css/HospitalPage/Balance.css';

class Balance extends Component {
  render() {
    return (
      <div className="uploadProduct">
        <div className="uploadProduct__wrapper">
          <div className="uploadProduct__tab">
            <table border="1">
              <tr>
                <th>기간</th>
                <th>게시물 개수</th>
                <th>판매 개수</th>
                <th>-</th>
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

export default Balance;
