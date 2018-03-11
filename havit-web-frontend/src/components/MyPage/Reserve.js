import React, { Component } from 'react';
import { Empty } from '../index';
import 'styles/css/MyPage/Reserve.css';

class Reserve extends Component {
  constructor(props) {
    super(props);
    this.state = {
      arr: [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31],
      month: 31,
      input: Array(50).fill(true),
    };
    this.changeMonth = this.changeMonth.bind(this);
    this.modifyReserveDate = this.modifyReserveDate.bind(this);
    this.handleChangeCare = this.handleChangeCare.bind(this);
    this.handleCancel = this.handleCancel.bind(this);
    this.handleConfirm = this.handleConfirm.bind(this);
  }

  changeMonth(e) {
    this.setState({
      month: this.state.arr[Number(e.currentTarget.value) - 1],
    });
  }

  modifyReserveDate(i) {
    this.props.modifyReservation(
      this.props.reservations.reservationsList[i.i].reserveNum,
      this.props.reservations.reservationsList[i.i].openPhoneNum,
      `2018${document.getElementById('setTimeMonth').value}${
        document.getElementById('setTimeDate').value
      }${document.getElementById('start').value}${
        document.getElementById('end').value
      }`
    );
    window.location.href = '/mypage/reserve';
  }

  handleChangeCare(i) {
    this.setState({
      input: [
        ...this.state.input.slice(0, i.i),
        !this.state.input[i.i],
        ...this.state.input.slice(i.i + 1),
      ],
    });
  }

  handleCancel(i) {
    if (window.confirm('삭제 하시겠습니까?')) {
      this.props.delReservation(
        localStorage.getItem('email'),
        this.props.reservations.reservationsList[i.i].productId,
        this.props.reservations.reservationsList[i.i].reserveNum,
        () => {
          window.location.reload();
        }
      );
    }
  }

  handleConfirm(num) {
    if (window.confirm('확정하시겠습니까?')) {
      this.props.confirmPurchase(num, () => {
        window.location.href = '/mypage/reserve';
      });
    }
  }
  render() {
    return (
      <div className="reserve">
        <div className="reserve__wrapper">
          <div className="reserve__tab">
            {this.props.reservations.reservationsList.length === 0 ? (
              <div className="empty">
                <p>예약이 없습니다</p>
              </div>
            ) : (
              <table className="reserve__table">
                <thead>
                  <tr>
                    <th>예약번호</th>
                    <th>이름</th>
                    <th>연락처</th>
                    <th>상품명</th>
                    <th>상담예약일자/시간</th>
                    <th>시술일자/시간</th>
                    <th>상태</th>
                    <th>시술완료/예약변경/취소</th>
                  </tr>
                </thead>
                <tbody>
                  {this.props.reservations.reservationsList.map((reser, i) => {
                    console.log(reser);
                    return (
                      <tr key={i}>
                        <td>{reser.reserveNum}</td>
                        <td>{reser.userName}</td>
                        <td>{'0' + reser.phone}</td>
                        <td
                          onClick={() =>
                            this.props.history.push(
                              `/products/${reser.productId}`
                            )
                          }
                        >
                          {reser.productName}
                        </td>
                        {this.state.input[{ i }.i] ? (
                          <td>{`${reser.reserveDate
                            .toString()
                            .slice(
                              4,
                              6
                            )}월 ${reser.reserveDate
                            .toString()
                            .slice(
                              6,
                              8
                            )}일/${reser.reserveDate
                            .toString()
                            .slice(
                              8,
                              10
                            )}시~${reser.reserveDate.toString().slice(10, 12) ||
                            '00'}시`}</td>
                        ) : (
                          <td>
                            <select
                              className="setTime__button"
                              id="setTimeMonth"
                              onChange={this.changeMonth}
                              defaultValue="월"
                            >
                              <option disabled>월</option>
                              {Array(12)
                                .fill(1)
                                .map((a, i) => {
                                  return (
                                    <option key={i}>
                                      {(a + i).toString().length < 2
                                        ? '0' + (a + i)
                                        : a + i}
                                    </option>
                                  );
                                })}
                            </select>
                            <select
                              className="setTime__button"
                              id="setTimeDate"
                              defaultValue="일"
                            >
                              <option disabled>일</option>
                              {Array(this.state.month)
                                .fill(1)
                                .map((a, i) => {
                                  return (
                                    <option key={i}>
                                      {(a + i).toString().length < 2
                                        ? '0' + (a + i)
                                        : a + i}
                                    </option>
                                  );
                                })}
                            </select>/
                            <select
                              id="start"
                              className="setTime__button"
                              defaultValue="시"
                            >
                              <option disabled>시</option>
                              {Array(24)
                                .fill(1)
                                .map((a, i) => {
                                  return (
                                    <option key={i}>
                                      {(a + i).toString().length < 2
                                        ? '0' + (a + i)
                                        : a + i}
                                    </option>
                                  );
                                })}
                            </select>
                            ~
                            <select
                              id="end"
                              className="setTime__button"
                              defaultValue="시"
                            >
                              <option disabled>시</option>
                              {Array(24)
                                .fill(1)
                                .map((a, i) => {
                                  return (
                                    <option key={i}>
                                      {(a + i).toString().length < 2
                                        ? '0' + (a + i)
                                        : a + i}
                                    </option>
                                  );
                                })}
                            </select>
                            <button
                              className="customerInfo__button"
                              onClick={() => this.modifyReserveDate({ i })}
                            >
                              변경
                            </button>
                            <button
                              className="customerInfo__button"
                              onClick={() => this.handleChangeCare({ i })}
                            >
                              취소
                            </button>
                          </td>
                        )}
                        <td>
                          {reser.status === '전화대기중'
                            ? reser.status
                            : `${reser.careDate
                                .toString()
                                .slice(
                                  4,
                                  6
                                )}월 ${reser.careDate
                                .toString()
                                .slice(
                                  6,
                                  8
                                )}일 ${reser.careDate
                                .toString()
                                .slice(8, 10)}시`}
                        </td>
                        <td>{reser.status}</td>
                        {this.state.input[{ i }.i] ? (
                          <td>
                            {reser.status !== '시술완료' && (
                              <button
                                className="customerInfo__button"
                                onClick={() =>
                                  this.handleConfirm(reser.reserveNum)
                                }
                              >
                                확정
                              </button>
                            )}
                            <button
                              className="customerInfo__button"
                              onClick={() => this.handleChangeCare({ i })}
                            >
                              변경
                            </button>
                            <button
                              className="customerInfo__button"
                              onClick={() => this.handleCancel({ i })}
                            >
                              취소
                            </button>
                          </td>
                        ) : (
                          <td style={{ textAlign: 'center' }}>
                            <button
                              className="customerInfo__button"
                              onClick={() => this.handleCancel({ i })}
                            >
                              취소
                            </button>
                          </td>
                        )}
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default Reserve;
