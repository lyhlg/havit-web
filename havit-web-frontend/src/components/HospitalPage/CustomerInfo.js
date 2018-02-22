import React, { Component } from 'react';
import 'styles/css/HospitalPage/CustomerInfo.css';

class CustomerInfo extends Component {
  render() {
    return (
      <div className="uploadProduct">
        <div className="uploadProduct__wrapper">
          <div className="uploadProduct__tab">
            <table border="1">
              <tr>
                <th>예약번호</th>
                <th>고객명</th>
                <th>연락처</th>
                <th>상품명</th>
                <th>상담예약일자</th>
                <th>상담예약시간</th>
                <th>시술일자</th>
                <th>시술시간</th>
                <th>상태</th>
                <th>예약변경/취소</th>
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

export default CustomerInfo;
