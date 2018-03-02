import React, { Component } from 'react';

class ProductReserve extends Component {
  constructor(props) {
    super(props);
    this.state = {
      arr: [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31],
      month: 31,
    };
  }

  render() {
    const purchaseView = {
      display: this.props.purchase,
    };
    return (
      <div className="productReserve" style={purchaseView}>
        <p>예약자</p>
        <input type="text" id="reserve__username" />
        <p>전화상담 날짜/시간</p>
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
        <select className="setTime__button" defaultValue="일">
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
        </select>/
        <select className="setTime__button" defaultValue="시">
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
        ~
        <select className="setTime__button" defaultValue="시">
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
        <button onClick={this.props.handleReserve}>취소</button>
      </div>
    );
  }
}

export default ProductReserve;
