import React, { Component } from 'react';
import 'styles/css/ServicePage/ServiceNotice.css';

class ServiceNotice extends Component {
  constructor(props) {
    super(props);
    this.state = {
      month: {
        Jan: '1월',
        Feb: '2월',
        Mar: '3월',
        Apr: '4월',
        May: '5월',
        Jun: '6월',
        Jul: '7월',
        Aug: '8월',
        Sept: '9월',
        Oct: '10월',
        Nov: '11월',
        Dec: '12월',
      },
      day: {
        Mon: '월',
        Tue: '화',
        Wed: '수',
        Thu: '목',
        Fri: '금',
        Sat: '토',
        Sun: '일',
      },
    };
    this.moveNoticeDetail = this.moveNoticeDetail.bind(this);
  }

  componentDidMount() {
    this.props.getNotices();
  }

  moveNoticeDetail(e) {
    this.props.history.push(
      `/servicePage/notice/${e.currentTarget.childNodes[0].textContent}`
    );
  }

  render() {
    return (
      <main className="serviceNotice">
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
                    <tr key={i} onClick={this.moveNoticeDetail}>
                      <td>{notice._id}</td>
                      <td>{notice.title}</td>
                      <td>{notice.author}</td>
                      <td>{`${notice.createdOn.slice(11, 16)}년 ${
                        this.state.month[notice.createdOn.slice(4, 7)]
                      } ${notice.createdOn.slice(8, 10)}일 (${
                        this.state.day[notice.createdOn.slice(0, 3)]
                      }) / ${
                        +notice.createdOn.slice(16, 18) + 9 > 24
                          ? +notice.createdOn.slice(16, 18) - 15
                          : +notice.createdOn.slice(16, 18) + 9
                      }시 ${notice.createdOn.slice(19, 21)}분`}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </main>
    );
  }
}

export default ServiceNotice;
