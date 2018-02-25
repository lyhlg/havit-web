import React, { Component } from 'react';
import { Loading } from '../index';
import 'styles/css/HospitalPage/CustomerInfo.css';

class CustomerInfo extends Component {
  componentDidMount() {
    this.props.getHospital('lyhlg0201@gmail.com');
  }

  render() {
    console.log(this.props.hospital.hospital);
    return (
      <div className="customerInfo">
        {this.props.hospital.loading ? (
          <Loading />
        ) : (
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
                    <th>시술일자/시간</th>
                    <th>상태</th>
                    <th>예약변경/취소</th>
                  </tr>
                </thead>
                <tbody>
                  {this.props.hospital.hospital.map((reserve, i) => {
                    return (
                      <tr key={i}>
                        <td>{reserve.reserveNum}</td>
                        <td>{reserve.userName}</td>
                        <td>{reserve.phone}</td>
                        <td>{reserve.productName}</td>
                        <td>{`${reserve.reserveDate.slice(
                          0,
                          4
                        )}년 ${reserve.reserveDate.slice(
                          4,
                          6
                        )}월 ${reserve.reserveDate.slice(6, 8)}일`}</td>
                        <td>{`${reserve.reserveDate.slice(
                          8,
                          10
                        )}시 ${reserve.reserveDate.slice(10, 12)}분`}</td>
                        {reserve.careDate === '전화대기중' ? (
                          <td>{reserve.careDate}</td>
                        ) : (
                          <td>{`${reserve.careDate.slice(
                            0,
                            4
                          )}년 ${reserve.careDate.slice(
                            4,
                            6
                          )}월 ${reserve.careDate.slice(
                            6,
                            8
                          )}일/${reserve.careDate.slice(
                            8,
                            10
                          )}시 ${reserve.careDate.slice(10, 12) || ''}분`}</td>
                        )}
                        <td>{reserve.status}</td>
                        <td>
                          <button>변경</button>
                          <button>취소</button>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default CustomerInfo;
