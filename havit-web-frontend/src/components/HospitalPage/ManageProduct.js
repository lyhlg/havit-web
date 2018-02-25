import React, { Component } from 'react';
import 'styles/css/HospitalPage/ManageProduct.css';

class ManageProduct extends Component {
  render() {
    return (
      <div className="manageProduct">
        <div className="manageProduct__wrapper">
          <div className="manageProduct__tab">
            <table className="manageProduct__table">
              <tr>
                <th>대분류</th>
                <th>소분류</th>
                <th>상품명</th>
                <th>시술금액</th>
                <th>구매수</th>
                <th>별점수</th>
                <th>리뷰수</th>
                <th>-</th>
              </tr>
              <td>
                <th>Wassup bro?</th>
              </td>
            </table>
          </div>
        </div>
      </div>
    );
  }
}

export default ManageProduct;
