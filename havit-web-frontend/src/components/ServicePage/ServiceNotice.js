import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import 'styles/css/ServicePage/ServiceNotice.css';

class ServiceNotice extends Component {
  componentDidMount() {
    this.props.getNotices();
  }

  render() {
    return (
      <div className="serviceNotice">
        <div className="serviceNotice__wrapper">
          <div className="serviceNotice__tab">
            <table className="serviceNotice__table">
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
                    <tr key={i}>
                      <td>{notice._id}</td>
                      <td>{notice.title}</td>
                      <td>{notice.author}</td>
                      <td>{notice.createdOn}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}

export default ServiceNotice;
