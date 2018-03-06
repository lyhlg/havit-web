import React, { Component } from 'react';
import 'styles/css/Common/ReviewBoard.css';

class ReviewBoard extends Component {
  render() {
    return (
      <div className="reviewBoard">
        <p className="reviewBoard__name">종규규</p>
        <p className="reviewBoard__menu">제모</p>
        <p className="reviewBoard__content">시원합니다</p>
        <hr />
        <p className="reviewBoard__name">종규규</p>
        <p className="reviewBoard__menu">제모</p>
        <p className="reviewBoard__content">시원합니다</p>
        <hr />
      </div>
    );
  }
}

export default ReviewBoard;
