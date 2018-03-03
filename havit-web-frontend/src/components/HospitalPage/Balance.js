import React, { Component } from 'react';
import 'styles/css/HospitalPage/Balance.css';

class Balance extends Component {
  componentDidMount() {
    console.log('DIDMOUNT:', this.props.getPayment('AAAA100000'));
  }
  render() {
    console.log('this.props:', this.props);
    return (
      <div className="balance">
        <div className="balance__wrapper">
          <div className="balance__tab">
            <table className="table">
              <tr>
                <th>게시물 개수</th>
                <th>정산 금액</th>
                <th />
              </tr>
              <td>
                <th>100 개</th>
              </td>
            </table>
          </div>
        </div>
      </div>
    );
  }
}

export default Balance;
