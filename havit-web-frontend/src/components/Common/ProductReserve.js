import React, { Component } from 'react';
import 'styles/css/Common/ProductReserve.css';

class ProductReserve extends Component {
  constructor(props) {
    super(props);
    this.state = {
      arr: [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31],
      month: 31,
      check: [false, 0],
    };
    this.submitReserve = this.submitReserve.bind(this);
  }

  submitReserve() {
    let data = [
      localStorage.getItem('email'),
      this.props.products.productsList[0].hospitalCode,
      document.getElementById('username').value,
      +document.getElementById('phone').value,
      +this.props.products.productsList[0].productId,
      document.getElementById('option').value,
      +`2018${document.getElementById('setTimeMonth').value}${
        document.getElementById('setTimeDate').value
      }${document.getElementById('setTime1').value}${
        document.getElementById('setTime2').value
      }`,
    ];
    if (
      !data[2] ||
      isNaN(data[3]) ||
      data[3].length < 10 ||
      data[3].length > 11 ||
      isNaN(data[6]) ||
      +document.getElementById('setTime1').value >=
        +document.getElementById('setTime2').value
    ) {
      this.setState({
        check: [false, 1],
      });
    } else {
      this.props.addReservation(...data, () => {
        window.location.href = '/mypage/reserve';
      });
    }
  }

  render() {
    const purchaseView = {
      display: this.props.purchase,
    };
    return (
      <div className="productReserve" style={purchaseView}>
        <div className="left">
          <p className="productReserve__label">예약자</p>
          <input type="text" id="username" className="productReserve__input" />
          <p className="productReserve__label">핸드폰 번호</p>
          <input type="text" id="phone" className="productReserve__input" />
          <p className="productReserve__label">전화상담 날짜/시간</p>
          <div className="setTime__wrapper">
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
                      {(a + i).toString().length < 2 ? '0' + (a + i) : a + i}
                    </option>
                  );
                })}
            </select>
            <select
              id="setTimeDate"
              className="setTime__button"
              defaultValue="일"
            >
              <option disabled>일</option>
              {Array(this.state.month)
                .fill(1)
                .map((a, i) => {
                  return (
                    <option key={i}>
                      {(a + i).toString().length < 2 ? '0' + (a + i) : a + i}
                    </option>
                  );
                })}
            </select>
            <span>/</span>
            <select id="setTime1" className="setTime__button" defaultValue="시">
              <option disabled>시</option>
              {Array(24)
                .fill(1)
                .map((a, i) => {
                  return (
                    <option key={i}>
                      {(a + i).toString().length < 2 ? '0' + (a + i) : a + i}
                    </option>
                  );
                })}
            </select>
            <span>~</span>
            <select id="setTime2" className="setTime__button" defaultValue="시">
              <option disabled>시</option>
              {Array(24)
                .fill(1)
                .map((a, i) => {
                  return (
                    <option key={i}>
                      {(a + i).toString().length < 2 ? '0' + (a + i) : a + i}
                    </option>
                  );
                })}
            </select>
          </div>
        </div>
        <div className="right">
          <button onClick={this.submitReserve}>예약하기</button>
          <button onClick={this.props.handleReserve}>취소</button>
          {!this.state.check[0] &&
            this.state.check[1] > 0 && <p>올바른 값을 입력하세요</p>}
        </div>
      </div>
    );
  }
}

export default ProductReserve;
