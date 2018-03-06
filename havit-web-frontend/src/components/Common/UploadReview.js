import React, { Component } from 'react';
import 'styles/css/Common/UploadReview.css';

class UploadReview extends Component {
  render() {
    return (
      <div className="uploadReview">
        <h2 className="uploadReview__title">상품후기 남기기</h2>
        <input
          id="title"
          type="text"
          className="uploadReview__input"
          placeholder="시술을 완료한 고객님만 후기 등록이 가능합니다."
        />
        <button type="submit" className="uploadReview__button">
          등록하기
        </button>
      </div>
    );
  }
}

export default UploadReview;
