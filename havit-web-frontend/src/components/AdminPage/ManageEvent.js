import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import 'styles/css/AdminPage/ManageEvent.css';

class ManageEvent extends Component {
  render() {
    return (
      <div className="manageEvent">
        <div className="manageEvent__wrapper">
          <div className="manageEvent__tab">
            <input
              name="keyword"
              className="manageHospital__right"
              placeholder=" Search"
            />
            <table className="manageEvent__table">
              <thead>
                <tr>
                  <th>우선순위</th>
                  <th>상품명</th>
                  <th>상품 금액</th>
                  <th>판매수</th>
                  <th>별점수</th>
                  <th>리뷰수</th>
                  <th>상태</th>
                </tr>
              </thead>
              <tbody>
                {this.props.events.eventsList.map((event, i) => {
                  return (
                    <tr key={i}>
                      <td>{event.priority}</td>
                      <td>{event.productName}</td>
                      <td>{event.price}</td>
                      <td>{event.purchased}</td>
                      <td>{event.productId}</td>
                      <td>{event.productId}</td>
                      <td>{event.status}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
            <Link to="/adminPage/uploadEvent" className="manageEvent__button">
              이벤트 등록하기
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default ManageEvent;
