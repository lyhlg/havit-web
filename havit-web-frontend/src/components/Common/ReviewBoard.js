import React, { Component } from 'react';
import 'styles/css/Common/ReviewBoard.css';

class ReviewBoard extends Component {
  render() {
    console.log(this.props.review);
    return (
      <div className="reviewBoard">
        <p className="reviewBoard__name">{this.props.review.user_id_email}</p>
        <p className="reviewBoard__menu">별점 : {this.props.review.stars}점</p>
        <p className="reviewBoard__content">{this.props.review.comment}</p>
        <hr />
      </div>
    );
  }
}

export default ReviewBoard;
