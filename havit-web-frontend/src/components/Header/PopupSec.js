import React, { Component } from 'react';
import 'styles/css/Header/PopupSec.css';

class PopupSec extends Component {
  render() {
    return (
      <div className="popupSec">
        <div className="popupSec_inner">
          <h1 className="popupSec_text">
            <div>
              <p className="popupSec__title">개인정보 수집 및 이용 동의</p>
            </div>
            <p className="popupSec__numbering">개인정보 취급방침</p>
            <p className="popupSec__content">
              (주)Nomad Donut(이하 ’회사’)이 운영하는 애플리케이션 havit과
              ‘havit’의 시스템을 이용하는 MOU체결 병의원(이하 ‘제휴병의원’)은
              고객님의 개인정보를 중요시하며, “정보통신망 이용촉진 및
              정보보호”에 관한 법률을 준수하고 있습니다.
            </p>
            <p className="popupSec__numbering">개인정보의 수집 및 이용목적</p>
            <p className="popupSec__content">
              ‘havit’ 및 ‘제휴병의원’은 수집한 개인정보를 다음의 목적을 위해
              활용합니다.
            </p>
            <p className="popupSec__content">
              1. 서비스 제공에 관한 계약 이행 및 서비스 제공에 따른 요금정산
              콘텐츠 제공, 구매 및 요금 결제, 물품배송 또는 청구지 등 발송 ,
              금융거래 본인 인증 및 금융 서비스
            </p>
            <p className="popupSec__content">
              2. 회원제 서비스 이용에 따른 본인 확인, 개인 식별 , 불량회원의
              부정 이용 방지와 비인가 사용 방지 , 가입 의사 확인 , 연령확인 ,
              불만처리 등 민원처리 , 고지사항 전달
            </p>
            <p className="popupSec__content">
              3. 이벤트 등 광고성 정보 전달, 접속 빈도 파악 또는 회원의 서비스
              이용에 대한 통계
            </p>
            <p className="popupSec__numbering">개인정보의 파기 절차 및 방법</p>
            <p className="popupSec__content">
              1. ‘havit’ 및 ‘제휴병의원’은 원칙적으로 개인정보 수집 및
              이용목적이 달성된 후에는 해당 정보를 지체 없이 파기합니다.
            </p>
            <p className="popupSec__content">
              2. 기타 개인정보침해에 대한 신고나 상담이 필요하신 경우에는 아래
              기관에 문의하시기 바랍니다.
            </p>
            <p className="popupSec__content">
              1) 개인분쟁조정위원회 (www.1336.or.kr/1336)
            </p>
            <p className="popupSec__content">
              2) 정보보호마크인증위원회 (www.eprivacy.or.kr/02-580-0533~4)
            </p>
            <p className="popupSec__content">
              3) 대검찰청 인터넷범죄수사센터 (icic.sppo.go.kr/02-3480-3600)
            </p>
            <p className="popupSec__content">
              4) 경찰청 사이버테러대응센터 (www.ctrc.go.kr/02-392-0330)
            </p>
            <p className="popupSec__end">
              본 약관은 2018년 3월 14일부터 적용됩니다.
            </p>
          </h1>
          <button
            onClick={this.props.closePopupSec}
            className="popupSec__button"
          >
            개인정보 수집 확인
          </button>
        </div>
      </div>
    );
  }
}

export default PopupSec;
