import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import 'styles/css/Header/UserAgrees.css';

class UserAgrees extends Component {
  render() {
    return (
      <div className="userAgrees">
        <div className="userAgrees__wrapper">
          <div className="userAgrees__tab">
            <div>
              <p className="userAgrees__title">개인정보 수집 및 이용 동의</p>
            </div>
            <p className="userAgrees__numbering">개인정보 취급방침</p>
            <p className="userAgrees__content">
              이 약관은 ㈜Nomad Donut이 운영하는 애플리케이션 havit 시스템을
              이용하는 ‘havit’ MOU체결 병의원(이하 ‘제휴병의원’)과 이용자의
              권리•의무 및 책임사항을 규정함을 목적으로 합니다.
            </p>
            <p className="userAgrees__numbering">개인정보의 수집 및 이용목적</p>
            <p className="userAgrees__content">
              1. ‘제휴병의원’이란 ‘havit’시스템을 제공받아 이용자에게
              ‘제휴병의원’의 비급여항목 아이템을 ‘제휴병의원’의 자체
              결제시스템을 통해서 이용할 수 있도록 서비스를 제공하는 주체를
              말합니다.
            </p>
            <p className="userAgrees__content">
              2. ‘이용자’란 ‘havit’에 접속하여 이 약관에 따라 ‘havit’과
              ‘제휴병의원’이 각각 제공하는 서비스를 받는 회원을 말합니다.
            </p>
            <p className="userAgrees__content">
              3. ‘서비스’라 함은, 구현되는 단말기(PC, 태블릿, 휴대용 단말기 등의
              각 종 유무선 장치)와 상관없이 ‘havit’ 브랜드명을 가지고 (주)Nomad
              Donut이 제공하는 제반 서비스를 말합니다.
            </p>
            <p className="userAgrees__content">
              4. ‘회원’ 이라 함은, 회사의 ‘서비스’에 접속하여 본 약관에
              동의하고, 회원 등록을 완료한 이용자를 말합니다.
            </p>
            <p className="userAgrees__content">
              5. ‘게시물’ 이라 함은, ‘회원’이 ‘서비스’를 이용함에 있어
              ‘서비스상’에 게시한 부호ㆍ문자ㆍ음성ㆍ음향ㆍ화상ㆍ동영상 등의 정보
              형태의 글, 사진, 동영상 및 각종 파일과 링크 등을 의미합니다.
            </p>
            <p className="userAgrees__numbering">
              개인정보의 파기 절차 및 방법
            </p>
            <p className="userAgrees__content">
              1. ‘havit’ 및 ‘제휴병의원’은 원칙적으로 개인정보 수집 및
              이용목적이 달성된 후에는 해당 정보를 지체 없이 파기합니다.
            </p>
            <p className="userAgrees__content">
              2. 기타 개인정보침해에 대한 신고나 상담이 필요하신 경우에는 아래
              기관에 문의하시기 바랍니다.
            </p>
            <p className="userAgrees__content">
              1) 개인분쟁조정위원회 (www.1336.or.kr/1336)
            </p>
            <p className="userAgrees__content">
              2) 정보보호마크인증위원회 (www.eprivacy.or.kr/02-580-0533~4)
            </p>
            <p className="userAgrees__content">
              3) 대검찰청 인터넷범죄수사센터 (icic.sppo.go.kr/02-3480-3600)
            </p>
            <p className="userAgrees__content">
              4) 경찰청 사이버테러대응센터 (www.ctrc.go.kr/02-392-0330)
            </p>
            <p className="userAgrees__end">
              본 약관은 2018년 3월 14일부터 적용됩니다.
            </p>
            <button className="userAgrees__button">
              개인정보 수집 동의 확인
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default UserAgrees;
