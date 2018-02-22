import React, { Component } from 'react';

class Reserve extends Component {
  componentDidMount() {
    this.props.getReservations();
  }

  render() {
    return (
      <table border="1">
        <thead>
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
        </thead>
        <tbody>
          {this.props.reservations.reservationsList.map((reser, i) => {
            return (
              <tr key={i}>
                <td>{reser.reserveNum}</td>
                <td>{reser.userName}</td>
                <td>{reser.phone}</td>
                <td>{reser.productName}</td>
                <td>
                  {reser.reserveDate.slice(4, 6)}월{' '}
                  {reser.reserveDate.slice(6, 8)}일
                </td>
                <td>
                  {reser.reserveDate.slice(8, 10)}시{' '}
                  {reser.reserveDate.slice(10, 12)}분
                </td>
                <td>
                  {reser.careDate === '전화예약 대기중'
                    ? reser.careDate
                    : `${reser.careDate.slice(4, 6)}월 ${reser.careDate.slice(
                        6,
                        8
                      )}일`}
                </td>
                <td>
                  {reser.careDate === '전화예약 대기중'
                    ? reser.careDate
                    : `${reser.careDate.slice(8, 10)}시`}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    );
  }
}

export default Reserve;

/*

careDate
:
"전화예약 대기중"
hospitalCode
:
"AAAA100001"
phone
:
"01021139177"
productName
:
"자신있게 다가올 여름을 위해 여드름치료는 알라딘필링"
reserveDate
:
"2017"
status
:
"전화예약 대기중"
userName
:
"정유택"
user_id_email
:
"jyt9319@gmail.com"
__typename
:
"Reservation"
_id
:
"5a8d289d780ddf192b7cbb33"
*/
