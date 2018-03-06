import React, { Component } from 'react';
import 'styles/css/Common/ReviewBoard.css';

class ReviewBoard extends Component {
  render() {
    return (
      <div className="reviewBoard">
        <div className="reviewBoard__box1">
          <p className="reviewBoard__name">이름 들어갈 곳</p>
          <p className="reviewBoard__date">작성일 들어갈 곳</p>
        </div>
        <div className="reviewBoard__box2">
          <p className="reviewBoard__content">내용 들어갈 곳</p>
        </div>
      </div>
    );
  }
}

export default ReviewBoard;
