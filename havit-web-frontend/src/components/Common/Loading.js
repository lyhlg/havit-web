import React, { Component } from 'react';
import 'styles/css/Common/Loading.css';

class Loading extends Component {
  render() {
    return (
      <div className="loading">
        <div className="loading__text">
          <p className="loading__mainLabel">
            해당 병의원 페이지로 이동중 입니다.
          </p>
          <p className="loading__label">
            <span>havit</span>은 피부과 중개 플랫폼입니다.
          </p>
          <p className="loading__label">
            각 병의원의 비급여항목 상품에 직접 관여하지 않으며,
          </p>
          <p className="loading__label">
            결제시스템과 관련된 취소 및 환불의 의무와 책임은 각 병의원에
            있습니다.
          </p>
          <p className="loading__label">
            해당 병의원의 비급여항목 결제 전 상세정보와 필독유의사항을 반드시
            확인하세요.
          </p>
          <p className="loading__copyright">
            COPYRIGHT (C) <span>havit</span> ALL RIGHTS RESERVED.
          </p>
        </div>
        <div className="loading__spinner">
          <div className="container">
            <div className="holder">
              <div className="box" />
            </div>
            <div className="holder">
              <div className="box" />
            </div>
            <div className="holder">
              <div className="box" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Loading;
