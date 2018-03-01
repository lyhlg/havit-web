import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import 'styles/css/ServicePage/ServiceCenter.css';

class ServiceCenter extends Component {
  render() {
    return (
      <div className="serviceCenter">
        <div className="serviceCenter__wrapper">
          <div className="serviceCenter__tab">
            <div className="serviceCenter__part1">
              고객님의 문의를 신속하게 처리하기 위해 고객센터 1544-3441을
              운영하고 있습니다. 궁금하신 사항은 언제든 문의주시기 바랍니다.
            </div>
            <div className="serviceCenter__part2">
              운영시간 평일 10:00 ~ 18:00 주말 및 공휴일 휴무
            </div>
            <div className="serviceCenter__part3">
              havit은 피부과 중개 플랫폼입니다. 따라서 각 병의원 예약 및 상담과
              관련한 문의는 해당 병의원으로 직접 연락을 주셔야 합니다.
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ServiceCenter;
