import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Loading } from '../index';
import 'styles/css/AdminPage/ChangeNotice.css';

import { FORMAT_FILENAME } from 'utils';
import { AWS_KEYS } from 'utils/awskey';
import s3BrowserDirectUpload from 's3-browser-direct-upload';

class ChangeNotice extends Component {
  constructor(props) {
    super(props);
    this.changeNoticeAdmin = this.changeNoticeAdmin.bind(this);
  }

  componentDidMount() {
    this.props.getNotices(Number(window.location.pathname.slice(24)));
  }

  changeNoticeAdmin() {
    const s3clientOptions = {
      accessKeyId: `${AWS_KEYS.accessKeyId}`,
      secretAccessKey: `${AWS_KEYS.secretAccessKey}`,
      region: 'eu-central-1',
      signatureVersion: 'v4',
    };
    const s3client = new s3BrowserDirectUpload(s3clientOptions);

    var uploadOptions = {
      data: document.querySelector('input[type=file]').files[0],
      key: FORMAT_FILENAME(
        'NOTICE',
        document.querySelector('input[type=file]').files[0].name
      ),
      bucket: 'codestates-havit-web',
    };

    s3client.upload(uploadOptions, (err, img) => {
      this.props.addNotice(
        document.getElementById('title').value,
        document.getElementById('body').value,
        '관리자',
        img
      );
      setTimeout(() => {
        window.location.href = '/adminPage/notice';
      }, 1500);
    });
  }

  render() {
    return (
      <div className="ChangeNotice">
        {!this.props.notices.noticesList[0] ? (
          <Loading />
        ) : (
          <div className="ChangeNotice__wrapper">
            <div className="ChangeNotice__tab">
              <h2 className="ChangeNotice__title">공지사항 수정</h2>
              <h3 className="ChangeNotice__label">제목</h3>
              <input
                id="title"
                type="text"
                className="ChangeNotice__input"
                placeholder="제목을 입력해주세요."
                defaultValue={
                  this.props.notices.noticesList[0] &&
                  this.props.notices.noticesList[0].title
                }
              />
              <h3 className="ChangeNotice__label">내용</h3>
              <textarea
                id="body"
                className="ChangeNotice__body"
                placeholder="내용을 입력해주세요."
                defaultValue={
                  this.props.notices.noticesList[0] &&
                  this.props.notices.noticesList[0].body
                }
              />
              <div className="ChangeNotice__btn">
                <button
                  onClick={this.changeNoticeAdmin}
                  className="ChangeNotice__button1"
                >
                  공지사항 수정하기
                </button>
                <Link to="/adminPage/notice" className="ChangeNotice__button2">
                  취소
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default ChangeNotice;
