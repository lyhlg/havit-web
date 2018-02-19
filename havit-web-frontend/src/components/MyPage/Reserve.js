import React, { Component } from 'react';

class Reserve extends Component {
  render() {
    return (
      <table border="1">
        <tr>
          <th>예약번호</th>
          <th>이름</th>
          <th>연락처</th>
          <th>상품명</th>
          <th>상담예약일자</th>
          <th>상담예약시간</th>
          <th>시술일자</th>
          <th>시술시간</th>
          <th>상태</th>
          <th>예약변경/취소</th>
        </tr>
      </table>
    );
  }
}

export default Reserve;
