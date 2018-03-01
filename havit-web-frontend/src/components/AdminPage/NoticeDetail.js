import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import 'styles/css/AdminPage/NoticeDetail.css';

class NoticeDetail extends Component {
  render() {
    console.log(this.props);

    return (
      <div className="noticeDetail">
        <div className="noticeDetail__wrapper">
          <div className="noticeDetail__tab">
            <h2 className="noticeDetail__label">제목</h2>
            <input id="title" type="text" className="noticeDetail__input" />
            <h2 className="noticeDetail__label">작성자</h2>
            <input id="author" type="text" className="noticeDetail__input" />
            <h2 className="noticeDetail__label">작성일</h2>
            <input id="createdOn" type="text" className="noticeDetail__input" />
            <h2 className="noticeDetail__label">내용</h2>
            <input id="body" type="text" className="noticeDetail__input" />
            <Link to="/adminPage/notice" className="noticeDetail__button">
              공지사항으로 이동
            </Link>
            <Link to="/adminPage/uploadNotice" className="noticeDetail__button">
              수정
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default NoticeDetail;
