import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import 'styles/css/ServicePage/ServiceFaq.css';

class ServiceFaq extends Component {
  render() {
    console.log(this.props);
    return (
      <div className="serviceFaq">
        <div className="serviceFaq__wrapper">
          <div className="serviceFaq__tab">
            <table className="serviceFaq__table">
              <thead>
                <tr>
                  <th>유형</th>
                  <th>내용</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Q.</td>
                  <td>회원만 예약이 가능한가요?</td>
                </tr>
                <tr>
                  <td>A.</td>
                  <td>
                    네, havit은 회원제를 시행하고 있습니다. 회원가입을 하시면
                    다양한 혜택을 받으실 수 있습니다.
                  </td>
                </tr>
                <tr>
                  <td>Q.</td>
                  <td>상품별 이벤트는 언제까지 진행되나요?</td>
                </tr>
                <tr>
                  <td>A.</td>
                  <td>
                    각 상품의 유효기간은 상품페이지 내에 기재되어 있습니다.
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}

export default ServiceFaq;
