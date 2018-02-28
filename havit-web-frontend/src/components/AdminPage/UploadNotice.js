import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import 'styles/css/AdminPage/UploadNotice.css';

class UploadNotice extends Component {
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
            <h3 className="uploadNotice__label">작성일</h3>
            <select id="type" className="uploadNotice__dropdown">
              <option value="2018">2018</option>
              <option value="2019">2019</option>
              <option value="2020">2020</option>
            </select>
            <h3 className="uploadNotice__label">내용</h3>
            <input
              type="text"
              id="title"
              className="uploadNotice__biginput"
              placeholder="내용을 입력해주세요."
            />
            <h3 className="uploadNotice__label">이미지 업로드</h3>
            <input type="file" className="uploadNotice__img" />
            <button className="uploadNotice__uploadbtn">Upload</button>
            <div className="uploadNotice__btn">
              <Link to="/adminPage/notice" className="uploadNotice__button">
                공지사항 등록하기
              </Link>
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
