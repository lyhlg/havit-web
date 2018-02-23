import React, { Component } from 'react';
import 'styles/css/Common/Empty.css';

class Empty extends Component {
  render() {
    return (
      <div className="empty">
        <p className="empty__text">상품이 없습니다</p>
      </div>
    );
  }
}

export default Empty;
