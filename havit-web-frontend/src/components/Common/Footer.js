import React, { Component } from 'react';
import 'styles/css/Common/Footer.css';

class Footer extends Component {
  render() {
    return (
      <footer className="footer">
        <div className="footer__madeBy">
          <a
            href="https://github.com/lyhlg"
            target="_blank"
            rel="noopener noreferrer"
          >
            이용현(Back-end)
          </a>
          <a
            href="https://github.com/dubbsong"
            target="_blank"
            rel="noopener noreferrer"
          >
            송진영(Front-end)
          </a>
          <a
            href="https://github.com/JungYouTaek"
            target="_blank"
            rel="noopener noreferrer"
          >
            정유택(Front-end)
          </a>
        </div>
        <div className="footer__description">
          <p>
            상호: (주) 오많배 ㅣ 대표이사: 송진영ㅣ개인정보보호책임자:
            이용현ㅣ에이스: 정유택ㅣ주소: 서울 중구 을지로 위워크 13층 에이스존
          </p>
          <p>
            사업자등록번호: 1002-849-068677(우리) ㅣ 통신판매번호:
            2018-데모데이-0314ㅣ전자우편주소: havitmailer@gmail.com
          </p>
        </div>
      </footer>
    );
  }
}

export default Footer;
