import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import 'styles/css/AdminPage/ChangeNotice.css';

class ChangeNotice extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.changeNoticeAdmin = this.changeNoticeAdmin.bind(this);
  }

  componentDidMount() {
    this.props.getNotices();
  }

  changeNoticeAdmin() {}

  render() {
    console.log(this.props.getNotices);
    return (
      <div className="ChangeNotice">
        <div className="ChangeNotice__wrapper">
          <div className="ChangeNotice__tab">
            <h2 className="ChangeNotice__title">공지사항 수정</h2>
            <h3 className="ChangeNotice__label">제목</h3>
            <input
              id="title"
              type="text"
              className="ChangeNotice__input"
              placeholder="제목을 입력해주세요."
              value={this.props.getNotices}
              style={{ backgroundColor: '#f7f8fb' }}
              disabled
            />
            <h3 className="ChangeNotice__label">내용</h3>
            <textarea
              id="body"
              className="ChangeNotice__body"
              placeholder="내용을 입력해주세요."
              value={this.props.getNotices}
              style={{ backgroundColor: '#f7f8fb' }}
              disabled
            />
            <h3 className="ChangeNotice__label">이미지 업로드</h3>
            <input type="file" className="ChangeNotice__img" />
            <div className="ChangeNotice__btn">
              <button
                onClick={this.changeNoticeAdmin}
                className="ChangeNotice__button"
              >
                공지사항 수정하기
              </button>
              <Link to="/adminPage/notice" className="ChangeNotice__button">
                취소
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ChangeNotice;
