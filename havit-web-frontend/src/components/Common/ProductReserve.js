import React, { Component } from 'react';

class ProductReserve extends Component {
  render() {
    const purchaseView = {
      display: this.props.purchase,
    };
    return (
      <div className="productReserve" style={purchaseView}>
        <p>하이하이</p>
        <button onClick={this.props.handleReserve}>취소</button>
      </div>
    );
  }
}

export default ProductReserve;
