import React, { Component } from 'react';

class Reserve extends Component {
  render() {
    return (
      <table border="1">
        <tr>
          <th>예약번호</th>
          <th>시술명</th>
          <th>시술일자</th>
          <th>D-day</th>
          <th>예약시간</th>
          <th>상태</th>
          <th>예약변경/취소</th>
        </tr>
      </table>
    );
  }
}

export default Reserve;
