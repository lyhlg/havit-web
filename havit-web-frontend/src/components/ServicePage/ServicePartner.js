import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import 'styles/css/ServicePage/ServicePartner.css';

class ServicePartner extends Component {
  render() {
    return (
      <div className="servicePartner">
        <div className="servicePartner__wrapper">
          <div className="servicePartner__tab">
            <h2 className="servicePartner__title">제휴 및 광고 신청하기</h2>
            <h3 className="servicePartner__label">이름/병원명</h3>
            <input
              type="text"
              id="title"
              className="servicePartner__input"
              placeholder="이름 및 병원명을 입력해주세요."
            />
            <h3 className="servicePartner__label">핸드폰 번호</h3>
            <input
              type="text"
              id="title"
              className="servicePartner__input"
              placeholder="연락처를 입력해주세요."
            />
            <h3 className="servicePartner__label">이메일</h3>
            <input
              type="text"
              id="title"
              className="servicePartner__input"
              placeholder="이메일@도메인"
            />
            <h3 className="servicePartner__label">문의 제목</h3>
            <input
              type="text"
              id="title"
              className="servicePartner__input"
              placeholder="문의 제목을 입력해주세요."
            />
            <h3 className="servicePartner__label">문의 내용</h3>
            <input
              type="text"
              id="title"
              className="servicePartner__biginput"
              placeholder="문의 내용을 입력해주세요."
            />
            <div className="servicePartner__btn">
              <Link
                to="/servicePage/serviceCenter"
                className="servicePartner__button"
              >
                제휴/광고 신청하기
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ServicePartner;
