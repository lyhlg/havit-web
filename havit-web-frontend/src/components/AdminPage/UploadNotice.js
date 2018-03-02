import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import 'styles/css/AdminPage/UploadNotice.css';

class UploadNotice extends Component {
  constructor(props) {
    super(props);
    this.submitNotice = this.submitNotice.bind(this);
  }

  submitNotice() {
    this.props.addNotice(
      document.getElementById('title').value,
      document.getElementById('content').value,
      '관리자',
      {
        name: document.querySelector('input[type=file]').files[0].name,
        type: document.querySelector('input[type=file]').files[0].type,
        size: document.querySelector('input[type=file]').files[0].size,
        path: document.querySelector('input[type=file]').files[0]
          .webkitRelativePath,
      }
    );
  }

  render() {
    return (
      <div className="uploadNotice">
        <div className="uploadNotice__wrapper">
          <div className="uploadNotice__tab">
            <h2 className="uploadNotice__title">공지사항 등록</h2>
            <h3 className="uploadNotice__label">제목</h3>
            <input
              type="text"
              id="title"
              className="uploadNotice__input"
              placeholder="제목을 입력해주세요."
            />
            <h3 className="uploadNotice__label">내용</h3>
            <textarea
              id="content"
              className="uploadNotice__biginput"
              placeholder="내용을 입력해주세요."
            />
            <h3 className="uploadNotice__label">이미지 업로드</h3>
            <input type="file" className="uploadNotice__img" />
            <div className="uploadNotice__btn">
              <button
                onClick={this.submitNotice}
                className="uploadNotice__button"
              >
                공지사항 등록하기
              </button>
              <Link to="/adminPage/notice" className="uploadNotice__button">
                취소
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default UploadNotice;
