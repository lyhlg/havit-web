import React, { Component } from 'react';
import 'styles/css/HospitalPage/CustomerInfo.css';

class CustomerInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      temp: '',
      month: [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31],
      date: 0,
    };
    this.submitCareDate = this.submitCareDate.bind(this);
    this.handleChangeCare = this.handleChangeCare.bind(this);
  }

  submitCareDate() {
    console.log('sadas');
  }
  handleChangeCare(e) {
    this.setState({
      temp: e.currentTarget.parentNode.parentNode.childNodes[5],
    });
    e.currentTarget.parentNode.parentNode.childNodes[5].innerHTML = `
    <select class="setTime__button" id="setTimeMonth">
      <option>월</option>
      ${Array(13)
        .fill(0)
        .map((a, i) => ((a + i).toString().length < 2 ? '0' + (a + i) : a + i))
        .reduce((x, y) => x + '<option>' + y + '</option>')}
    </select>
    <select class="setTime__button">
      <option>일</option>
      ${Array(32)
        .fill(0)
        .map((a, i) => ((a + i).toString().length < 2 ? '0' + (a + i) : a + i))
        .reduce((x, y) => x + '<option>' + y + '</option>')}
    </select>
    <select class="setTime__button">
    <option>시</option>
    ${Array(25)
      .fill(0)
      .map((a, i) => ((a + i).toString().length < 2 ? '0' + (a + i) : a + i))
      .reduce((x, y) => x + '<option>' + y + '</option>')}
    </select>
    <select class="setTime__button">
    <option>분</option>
    ${Array(61)
      .fill(0)
      .map((a, i) => ((a + i).toString().length < 2 ? '0' + (a + i) : a + i))
      .reduce((x, y) => x + '<option>' + y + '</option>')}
    </select>
    <button class="customerInfo__button" onClick="submitCareDate">등록</button>
    <button class="customerInfo__button">취소</button>
    `;
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
                {this.props.hospital.hospitalReservations.map((reserve, i) => {
                  return (
                    <tr key={i}>
                      <td>{reserve.reserveNum}</td>
                      <td>{reserve.userName}</td>
                      <td>{reserve.phone}</td>
                      <td>
                        {reserve.productName.length > 12
                          ? reserve.productName.slice(0, 12) + '...'
                          : reserve.productName}
                      </td>
                      <td>{`${reserve.reserveDate.slice(
                        4,
                        6
                      )}월 ${reserve.reserveDate.slice(
                        6,
                        8
                      )}일 / ${reserve.reserveDate.slice(
                        8,
                        10
                      )}시 ${reserve.reserveDate.slice(10, 12)}분`}</td>
                      {reserve.careDate === '전화대기중' ? (
                        <td>{reserve.careDate}</td>
                      ) : (
                        <td>{`${reserve.careDate.slice(
                          4,
                          6
                        )}월 ${reserve.careDate.slice(
                          6,
                          8
                        )}일/${reserve.careDate.slice(
                          8,
                          10
                        )}시 ${reserve.careDate.slice(10, 12) || '00'}분`}</td>
                      )}
                      <td>{reserve.status}</td>
                      <td>
                        <button
                          className="customerInfo__button"
                          onClick={this.handleChangeCare}
                        >
                          변경
                        </button>
                        <button className="customerInfo__button">취소</button>
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
