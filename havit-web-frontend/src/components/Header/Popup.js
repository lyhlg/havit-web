import React, { Component } from 'react';
import 'styles/css/Header/Popup.css';

class Popup extends Component {
  render() {
    return (
      <div className="popup">
        <div className="popup_inner">
          <h1 className="popup_text">
            <div>
              <p className="popup__title">havit 이용약관</p>
            </div>
            <p className="popup__numbering">이용약관 1조 목적</p>
            <p className="popup__content">
              이 약관은 ㈜Nomad Donut이 운영하는 애플리케이션 havit 시스템을
              이용하는 ‘havit’ MOU체결 병의원(이하 ‘제휴병의원’)과 이용자의
              권리•의무 및 책임사항을 규정함을 목적으로 합니다.
            </p>
            <p className="popup__numbering">제2조 정의</p>
            <p className="popup__content">
              1. ‘제휴병의원’이란 ‘havit’시스템을 제공받아 이용자에게
              ‘제휴병의원’의 비급여항목 아이템을 ‘제휴병의원’의 자체
              결제시스템을 통해서 이용할 수 있도록 서비스를 제공하는 주체를
              말합니다.
            </p>
            <p className="popup__content">
              2. ‘이용자’란 ‘havit’에 접속하여 이 약관에 따라 ‘havit’과
              ‘제휴병의원’이 각각 제공하는 서비스를 받는 회원을 말합니다.
            </p>
            <p className="popup__content">
              3. ‘서비스’라 함은, 구현되는 단말기(PC, 태블릿, 휴대용 단말기 등의
              각 종 유무선 장치)와 상관없이 ‘havit’ 브랜드명을 가지고 (주)Nomad
              Donut이 제공하는 제반 서비스를 말합니다.
            </p>
            <p className="popup__content">
              4. ‘회원’ 이라 함은, 회사의 ‘서비스’에 접속하여 본 약관에
              동의하고, 회원 등록을 완료한 이용자를 말합니다.
            </p>
            <p className="popup__content">
              5. ‘게시물’ 이라 함은, ‘회원’이 ‘서비스’를 이용함에 있어
              ‘서비스상’에 게시한 부호ㆍ문자ㆍ음성ㆍ음향ㆍ화상ㆍ동영상 등의 정보
              형태의 글, 사진, 동영상 및 각종 파일과 링크 등을 의미합니다.
            </p>
            <p className="popup__numbering">제3조 약관의 명시와 개정</p>
            <p className="popup__content">
              1. 'havit’과 ‘제휴병의원’이 약관의 내용과 상호, 영업소 소재지,
              대표자의 성명, 사업자등록번호, 연락처 등을 이용자가 쉽게 알 수
              있도록 ‘havit’과 ‘제휴병의원’ 각각의 해당 페이지에 게재합니다.
            </p>
            <p className="popup__content">
              2. ‘havit’과 ‘제휴병의원’은 전자상거래 등에서의 소비자보호에 관한
              법률, 약관의 규제 등에 관한 법률, 전자거래 기본법, 전자서명법,
              정보통신망 이용촉진 등에 관한 법률, 방문판매 등에 관한 법률,
              소비자기본법 등 관련법을 위배하지 않는 범위에서 이 약관을 개정할
              수 있습니다.
            </p>
            <p className="popup__content">
              3. ‘havit’과 ‘제휴병의원’이 약관을 개정할 경우에는 적용일자 및
              개정사유 명시하여 현행약관과 함께 ‘havit’과 ‘제휴병의원’
              관련화면에 그 적용일자 7일 이전부터 적용일자 전일까지 공지합니다.
              다만, 이용자에게 불리하게 약관내용을 변경하는 경우에는 최소한 30일
              이상의 사전 유예기간을 두고 공지합니다. 이 경우 ‘havit’과
              ‘제휴병의원’ 개정전과 개정 후 내용을 명확하게 비교하여 이용자가
              알기 쉽도록 표시합니다.
            </p>
            <p className="popup__end">
              본 약관은 2018년 3월 14일부터 적용됩니다.
            </p>
          </h1>
          <button onClick={this.props.closePopup} className="popup__button">
            이용약관 확인
          </button>
        </div>
      </div>
    );
  }
}

export default Popup;
