import React, { Component } from 'react';
import 'styles/css/Common/Loading.css';

class Loading extends Component {
  render() {
    return (
      <div className="loading">
        <div className="loading__text">
          <div>
            <p className="loading__mainLabel">로딩중 입니다.</p>
          </div>
          <div>
            <p className="loading__label">havit은 피부과 중개 플랫폼입니다.</p>
            <p className="loading__label">
              따라서 각 병의원 예약 및 상담과 관련한 문의는
            </p>
            <p className="loading__label">
              병의원으로 직접 연락을 주셔야 합니다.
            </p>
          </div>
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
