import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import 'styles/css/AdminPage/UploadEvent.css';

class ChangeEvent extends Component {
  render() {
    return (
      <div className="uploadEvent">
        <div className="uploadEvent__wrapper">
          <div className="uploadEvent__tab">
            <h2 className="uploadEvent__title">이벤트 보기</h2>
            <h3 className="uploadEvent__label">우선순위</h3>
            <select
              id="priority"
              className="uploadEvent__dropdown"
              defaultValue={
                this.props.events.eventsList[0] &&
                this.props.events.eventsList[
                  Number(window.location.pathname.slice(23))
                ].priority
              }
            >
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
            </select>
            <h3 className="uploadEvent__label">상품명</h3>
            <input
              type="text"
              id="productName"
              className="uploadEvent__input"
              placeholder="상품명을 입력해주세요."
              defaultValue={
                this.props.events.eventsList[0] &&
                this.props.events.eventsList[
                  Number(window.location.pathname.slice(23))
                ].productName
              }
            />
            <h3 className="uploadEvent__label">병원 코드</h3>
            <input
              type="text"
              id="hospitalCode"
              className="uploadEvent__input"
              placeholder="병원 코드를 입력해주세요."
              defaultValue={
                this.props.events.eventsList[0] &&
                this.props.events.eventsList[
                  Number(window.location.pathname.slice(23))
                ].hospitalCode
              }
            />
            <h3 className="uploadEvent__label">상품 설명</h3>
            <input
              type="text"
              id="description"
              className="uploadEvent__input"
              placeholder="상품에 대한 정보를 입력해주세요."
              defaultValue={
                this.props.events.eventsList[0] &&
                this.props.events.eventsList[
                  Number(window.location.pathname.slice(23))
                ].description
              }
            />
            <h3 className="uploadEvent__label">상품 금액</h3>
            <input
              type="text"
              id="price"
              className="uploadEvent__input"
              placeholder="상품 금액을 입력해주세요."
              defaultValue={
                this.props.events.eventsList[0] &&
                this.props.events.eventsList[
                  Number(window.location.pathname.slice(23))
                ].price
              }
            />
            <h3 className="uploadEvent__label">
              이벤트 상품 이미지 업로드 (메인 이미지)
            </h3>
            <input
              type="file"
              id="productImage"
              className="upload__img"
              defaultValue={
                this.props.events.eventsList[0] &&
                this.props.events.eventsList[
                  Number(window.location.pathname.slice(23))
                ].img
              }
            />
            <h3 className="uploadEvent__label">
              이벤트 상품 이미지 업로드 (상세 이미지)
            </h3>
            <input
              type="file"
              id="productImage"
              className="upload__img"
              defaultValue={
                this.props.events.eventsList[0] &&
                this.props.events.eventsList[
                  Number(window.location.pathname.slice(23))
                ].productDetail
              }
            />
            <h3 className="uploadEvent__label">상태</h3>
            <select id="status" className="uploadEvent__dropdown">
              <option value="진행중">진행중</option>
              <option value="종료">종료</option>
            </select>
            <div className="uploadEvent__btn">
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

export default ChangeEvent;
