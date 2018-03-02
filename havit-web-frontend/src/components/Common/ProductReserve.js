import React, { Component } from 'react';

class ProductReserve extends Component {
  render() {
    const purchaseView = {
      display: this.props.purchase,
    };
    return (
      <div className="productReserve" style={purchaseView}>
        <p>예약자</p>
        <input type="text" id="reserve__username" />
        <p>예약자</p>
        <p>전화상담 날짜</p>
        <button onClick={this.props.handleReserve}>취소</button>
      </div>
    );
  }
}

export default ProductReserve;
