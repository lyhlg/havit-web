import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import 'styles/css/AdminPage/UploadHospital.css';

class UploadHospital extends Component {
  render() {
    return (
      <div className="uploadHospital">
        <div className="uploadHospital__wrapper">
          <div className="uploadHospital__tab">
            <h2 className="uploadHospital__title">병원 추가</h2>
            <h3 className="uploadHospital__label">병원 코드</h3>
            <input
              type="text"
              id="title"
              className="uploadHospital__input"
              placeholder="병원 코드를 입력해주세요."
            />
            <h3 className="uploadHospital__label">병원 이름</h3>
            <input
              type="text"
              id="title"
              className="uploadHospital__input"
              placeholder="병원 이름을 입력해주세요."
            />
            <h3 className="uploadHospital__label">병원 위치</h3>
            <select id="type" className="uploadHospital__dropdown">
              <option value="kangnam">강남구</option>
              <option value="songpa">송파구</option>
              <option value="kangdong">강동구</option>
            </select>
            <h3 className="uploadHospital__label">관리자 계정</h3>
            <input
              type="text"
              id="title"
              className="uploadHospital__input"
              placeholder="이메일@도메인"
            />
            <div className="uploadHospital__button">
              <button className="uploadHospital__btn">병원 추가하기</button>
              <button className="uploadHospital__btn">취소</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default UploadHospital;
