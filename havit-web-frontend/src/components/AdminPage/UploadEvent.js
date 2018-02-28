import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import 'styles/css/AdminPage/UploadEvent.css';

class UploadEvent extends Component {
  render() {
    return (
      <div className="uploadEvent">
        <div className="uploadEvent__wrapper">
          <div className="uploadEvent__tab">
            <h2 className="uploadEvent__title">이벤트 등록</h2>
            <h3 className="uploadEvent__label">우선순위</h3>
            <select id="type" className="uploadEvent__dropdown">
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
            </select>
            <h3 className="uploadEvent__label">상품명</h3>
            <input
              type="text"
              id="title"
              className="uploadEvent__input"
              placeholder="상품명을 입력해주세요."
            />
            <h3 className="uploadEvent__label">상품 설명</h3>
            <input
              type="text"
              id="title"
              className="uploadEvent__input"
              placeholder="상품에 대한 정보를 입력해주세요."
            />
            <h3 className="uploadEvent__label">상품 금액</h3>
            <input
              type="text"
              id="title"
              className="uploadEvent__input"
              placeholder="상품 금액을 입력해주세요."
            />
            <h3 className="uploadEvent__label">
              이벤트 이미지 업로드 (메인 이미지)
            </h3>
            <input type="file" className="uploadEvent__img" />
            <button className="uploadEvent__uploadbtn">Upload</button>
            <h3 className="uploadEvent__label">
              이벤트 이미지 업로드 (상세 이미지)
            </h3>
            <input type="file" className="uploadEvent__img" />
            <button className="uploadEvent__uploadbtn">Upload</button>
            <h3 className="uploadEvent__label">상태</h3>
            <select id="type" className="uploadEvent__dropdown">
              <option value="ing">진행중</option>
              <option value="done">종료</option>
            </select>
            <div className="uploadEvent__btn">
              <Link to="/adminPage/manageEvent" className="uploadEvent__button">
                병원 추가하기
              </Link>
              <Link to="/adminPage/manageEvent" className="uploadEvent__button">
                취소
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default UploadEvent;
