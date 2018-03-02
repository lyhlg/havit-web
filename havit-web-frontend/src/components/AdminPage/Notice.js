import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import 'styles/css/AdminPage/Notice.css';

class Notice extends Component {
  constructor(props) {
    super(props);
    this.moveNoticeDetail = this.moveNoticeDetail.bind(this);
  }

  moveNoticeDetail(e) {
    if (e.currentTarget.childNodes[3].textContent !== '미등록') {
      localStorage.setItem('notice', e.currentTarget.childNodes[3].textContent);
      this.props.history.push('/adminPage/noticeDetail');
    }
  }
  render() {
    return (
      <div className="notice">
        <div className="notice__wrapper">
          <div className="notice__tab">
            <table className="notice__table">
              <thead>
                <tr>
                  <th>번호</th>
                  <th>제목</th>
                  <th>작성자</th>
                  <th>작성일</th>
                </tr>
              </thead>
              <tbody>
                {this.props.notices.noticesList.map((notice, i) => {
                  return (
                    <tr key={i} onClick={this.moveNoticeDetail}>
                      <td>{notice._id}</td>
                      <td>{notice.title}</td>
                      <td>{notice.author}</td>
                      <td>{notice.createdOn}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
            <Link to="/adminPage/uploadNotice" className="notice__button">
              공지사항 등록하기
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default Notice;
