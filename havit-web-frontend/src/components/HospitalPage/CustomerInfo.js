import React, { Component } from 'react';
import 'styles/css/HospitalPage/CustomerInfo.css';

class CustomerInfo extends Component {
  componentDidMount() {
    this.props.getHospital('lyhlg0201@gmail.com');
  }

  render() {
    return (
      <div className="customerInfo">
        <div className="customerInfo__wrapper">
          <div className="customerInfo__tab">
            <table className="customerInfo__table">
              <thead>
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
              </thead>
              <tbody>
                <tr />
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}

export default CustomerInfo;
