import React, { Component } from 'react';
import 'styles/css/HospitalPage/CustomerInfo.css';

class CustomerInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      arr: [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31],
      month: 31,
      input: Array(
        this.props.hospital.hospitalReservations &&
          this.props.hospital.hospitalReservations.length
      ).fill(true),
    };
    this.openNum = this.openNum.bind(this);
    this.submitCareDate = this.submitCareDate.bind(this);
    this.changeMonth = this.changeMonth.bind(this);
    this.handleChangeCare = this.handleChangeCare.bind(this);
  }

  openNum(e) {
    this.props.modifyReservation(
      e.currentTarget.parentNode.parentNode.childNodes[0].textContent,
      '',
      0,
      0,
      1
    );
    window.location.href = '/hospitalPage/customerInfo';
  }

  submitCareDate(e) {
    if (
      e.currentTarget.parentNode.childNodes[0].value === '월' ||
      e.currentTarget.parentNode.childNodes[1].value === '일' ||
      e.currentTarget.parentNode.childNodes[3].value === '시'
    ) {
      alert('올바른 값을 입력 바랍니다');
    } else {
      this.props.fixReservation(
        e.currentTarget.parentNode.parentNode.childNodes[0].textContent,
        `2018${e.currentTarget.parentNode.childNodes[0].value}${
          e.currentTarget.parentNode.childNodes[1].value
        }${e.currentTarget.parentNode.childNodes[3].value}`
      );
      window.location.href = '/hospitalPage/customerInfo';
    }
  }

  changeMonth(e) {
    this.setState({
      month: this.state.arr[Number(e.currentTarget.value) - 1],
    });
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

  render() {
    return (
      <div className="customerInfo">
        <div className="customerInfo__wrapper">
          <div className="customerInfo__tab">
            <table className="table">
              <thead>
                <tr>
                  <th>예약번호</th>
                  <th>고객명</th>
                  <th>연락처</th>
                  <th>상품명</th>
                  <th>상담예약일자/시간</th>
                  <th>시술일자/시간</th>
                  <th>상태</th>
                  <th>예약변경/취소</th>
                </tr>
              </thead>
              <tbody>
                {this.props.hospital.hospitalReservations &&
                  this.props.hospital.hospitalReservations.map((reserve, i) => {
                    return (
                      <tr key={i}>
                        <td>{reserve.reserveNum}</td>
                        <td>{reserve.userName}</td>
                        <td>
                          {reserve.openPhoneNum ? (
                            '0' + reserve.phone
                          ) : (
                            <button
                              onClick={this.openNum}
                              className="customerInfo__openNum"
                            >
                              번호 보기
                            </button>
                          )}
                        </td>
                        <td>
                          {reserve.productName.length > 12
                            ? reserve.productName.slice(0, 12) + '...'
                            : reserve.productName}
                        </td>
                        <td>{`${reserve.reserveDate
                          .toString()
                          .slice(
                            4,
                            6
                          )}월 ${reserve.reserveDate
                          .toString()
                          .slice(
                            6,
                            8
                          )}일 / ${reserve.reserveDate
                          .toString()
                          .slice(
                            8,
                            10
                          )}시~${reserve.reserveDate
                          .toString()
                          .slice(10, 12)}시`}</td>
                        {this.state.input[{ i }.i] ? (
                          reserve.status === '전화대기중' ? (
                            <td>전화대기중</td>
                          ) : (
                            <td>{`${reserve.careDate
                              .toString()
                              .slice(
                                4,
                                6
                              )}월 ${reserve.careDate
                              .toString()
                              .slice(
                                6,
                                8
                              )}일/${reserve.careDate
                              .toString()
                              .slice(8, 10)}시`}</td>
                          )
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
                              onClick={this.submitCareDate}
                            >
                              등록
                            </button>
                            <button
                              className="customerInfo__button"
                              onClick={() => this.handleChangeCare({ i })}
                            >
                              취소
                            </button>
                          </td>
                        )}
                        <td>{reserve.status}</td>
                        <td>
                          <button
                            className="customerInfo__button"
                            onClick={() => this.handleChangeCare({ i })}
                          >
                            변경
                          </button>
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

export default CustomerInfo;
