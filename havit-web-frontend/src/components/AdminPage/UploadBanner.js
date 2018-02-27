import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import 'styles/css/AdminPage/UploadBanner.css';

class UploadBanner extends Component {
  render() {
    return (
      <div className="uploadBanner">
        <div className="uploadBanner__wrapper">
          <div className="uploadBanner__tab">
            <h2 className="uploadBanner__title">배너 등록</h2>
            <h3 className="uploadBanner__label">우선순위</h3>
            <select id="type" className="uploadBanner__dropdown">
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
            </select>
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
            <h3 className="uploadBanner__label">상태</h3>
            <select id="type" className="uploadBanner__dropdown">
              <option value="ing">판매중</option>
              <option value="done">판매종료</option>
            </select>
            <h3 className="uploadBanner__label">배너 이미지 업로드</h3>
            <input type="file" className="uploadBanner__img" />
            <button className="uploadBanner__uploadbtn">Upload</button>
            <div className="uploadBanner__button">
              <button className="uploadBanner__btn">배너 등록하기</button>
              <button className="uploadBanner__btn">취소</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default UploadBanner;
