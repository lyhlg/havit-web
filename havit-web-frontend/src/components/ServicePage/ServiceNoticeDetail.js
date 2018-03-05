import React, { Component } from 'react';
import 'styles/css/ServicePage/ServiceNoticeDetail.css';

class ServiceNoticeDetail extends Component {
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
  }
  componentDidMount() {
    this.props.getNotices(this.props.location.pathname.slice(20));
  }

  render() {
    console.log(this.props.notices.noticesList[0]);
    return (
      <main>
        <table className="noticeDetail">
          <thead>
            <tr>
              <th>제목</th>
              <th className="content" colSpan="10">
                {this.props.notices.noticesList[0] &&
                  this.props.notices.noticesList[0].title}
              </th>
            </tr>
            <tr>
              <th>작성자</th>
              <th className="content" colSpan="4">
                {this.props.notices.noticesList[0] &&
                  this.props.notices.noticesList[0].author}
              </th>
              <th>작성일</th>
              <th className="content" colSpan="5">{`${this.props.notices
                .noticesList[0] &&
                this.props.notices.noticesList[0].createdOn.slice(11, 16)}년 ${
                this.state.month[
                  this.props.notices.noticesList[0] &&
                    this.props.notices.noticesList[0].createdOn.slice(4, 7)
                ]
              } ${this.props.notices.noticesList[0] &&
                this.props.notices.noticesList[0].createdOn.slice(8, 10)}일 (${
                this.state.day[
                  this.props.notices.noticesList[0] &&
                    this.props.notices.noticesList[0].createdOn.slice(0, 3)
                ]
              }) / ${
                this.props.notices.noticesList[0] &&
                +this.props.notices.noticesList[0].createdOn.slice(16, 18) + 9 >
                  24
                  ? this.props.notices.noticesList[0] &&
                    +this.props.notices.noticesList[0].createdOn.slice(16, 18) -
                      15
                  : this.props.notices.noticesList[0] &&
                    +this.props.notices.noticesList[0].createdOn.slice(16, 18) +
                      9
              }시 ${this.props.notices.noticesList[0] &&
                this.props.notices.noticesList[0].createdOn.slice(
                  19,
                  21
                )}분`}</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td colSpan="11">
                {this.props.notices.noticesList[0] &&
                  this.props.notices.noticesList[0].body}
              </td>
            </tr>
          </tbody>
        </table>
        <div className="buttonWrapper">
          <button
            onClick={() =>
              this.props.history.push('/servicePage/serviceNotice')
            }
          >
            목록으로 돌아가기
          </button>
        </div>
      </main>
    );
  }
}

export default ServiceNoticeDetail;
