import React, { Component } from 'react';
import 'styles/css/Common/UploadReview.css';

class UploadReview extends Component {
  constructor(props) {
    super(props);
    this.submitReview = this.submitReview.bind(this);
  }

  submitReview() {
    this.props.addReview(
      localStorage.getItem('email'),
      Number(document.querySelector('input[name="star"]:checked').value),
      document.getElementById('content').value,
      Number(window.location.pathname.slice(10)),
      () => {
        window.location.reload();
      }
    );
  }

  render() {
    return (
      <div className="uploadReview">
        <h2 className="uploadReview__title">상품후기 남기기</h2>
        <textarea
          id="content"
          className="uploadReview__input"
          placeholder="시술을 완료한 고객님만 후기 등록이 가능합니다."
        />
        <div className="uploadReview__star">
          <h3>별점</h3>
          <label>
            <input
              type="radio"
              id="star1"
              name="star"
              value="5"
              defaultChecked
            />★★★★★
          </label>
          <label>
            <input type="radio" id="star2" name="star" value="4" />★★★★☆
          </label>
          <label>
            <input type="radio" id="star3" name="star" value="3" />★★★☆☆
          </label>
          <label>
            <input type="radio" id="star4" name="star" value="2" />★★☆☆☆
          </label>
          <label>
            <input type="radio" id="star5" name="star" value="1" />★☆☆☆☆
          </label>
        </div>
        <button
          type="submit"
          onClick={this.submitReview}
          className="uploadReview__button"
        >
          등록하기
        </button>
      </div>
    );
  }
}

export default UploadReview;
