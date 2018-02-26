import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import 'styles/css/AdminPage/UploadBaner.css';

class UploadBanner extends Component {
  fileUploadHandler = () => {};

  render() {
    return (
      <div className="uploadBanner">
        <div className="uploadBanner__wrapper">
          <div className="uploadBanner__tab">
            <h2 className="uploadBanner__title">배너 등록</h2>
            <h3 className="uploadBanner__label">상품명</h3>
            <input
              type="text"
              id="title"
              className="uploadBanner__input"
              placeholder="상품명을 입력해주세요."
            />
            <h3 className="uploadBanner__label">상품 URL</h3>
            <input
              type="text"
              id="title"
              className="uploadBanner__input"
              placeholder="상품 URL을 입력해주세요."
            />
            <h3 className="uploadBanner__label">상품 상태</h3>
            <select
              id="type"
              className="uploadBanner__dropdown"
              // onChange={this.handleSubType.bind(this)}
            >
              <option value="ing">판매중</option>
              <option value="done">판매종료</option>
            </select>
            <h3 className="uploadBanner__label">배너 이미지 업로드</h3>
            <input
              type="file"
              className="uploadBanner__img"
              // onChange={this.fileSelectedHandler}
            />
            <button
              className="uploadBanner__btn"
              onClick={this.fileUploadHandler}
            >
              Upload
            </button>
            <button
              className="uploadBanner__uploadBtn"
              onClick={this.fileUploadHandler}
            >
              배너 등록하기
            </button>
            <button
              className="uploadBanner__cancelBtn"
              onClick={this.fileUploadHandler}
            >
              취소
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default UploadBanner;
