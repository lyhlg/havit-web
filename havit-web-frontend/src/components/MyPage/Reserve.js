import React, { Component } from 'react';
import 'styles/css/MyPage/Reserve.css';

class Reserve extends Component {
  componentDidMount() {
    this.props.getReservations();
  }

  render() {
    return (
      <div className="reserve">
        <div className="reserve__wrapper">
          <div className="reserve__tab">
            <table className="reserve__table">
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
                {this.props.reservations &&
                  this.props.reservations.reservationsList.map((reser, i) => {
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
                          {reser.careDate === '전화대기중'
                            ? reser.careDate
                            : `${reser.careDate.slice(
                                4,
                                6
                              )}월 ${reser.careDate.slice(6, 8)}일`}
                        </td>
                        <td>
                          {reser.careDate === '전화대기중'
                            ? reser.careDate
                            : `${reser.careDate.slice(8, 10)}시`}
                        </td>
                      </tr>
                    );
                  })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}

export default Reserve;
