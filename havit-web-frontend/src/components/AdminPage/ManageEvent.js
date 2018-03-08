import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { trash } from 'assets/img';
import 'styles/css/AdminPage/ManageEvent.css';

class ManageEvent extends Component {
  constructor(props) {
    super(props);
    this.moveEventEdit = this.moveEventEdit.bind(this);
    this.deleteEvent = this.deleteEvent.bind(this);
  }

  moveEventEdit(i) {
    this.props.history.push(`/adminPage/changeEvent/${i.i}`);
  }

  deleteEvent(e, code, id) {
    e.stopPropagation();
    if (window.confirm('삭제하시겠습니까?')) {
      this.props.delEvent(code, id, () => {
        window.location.href = '/adminPage/manageEvent';
      });
    }
  }

  render() {
    console.log(this.props);
    return (
      <div className="manageEvent">
        <div className="manageEvent__wrapper">
          <div className="manageEvent__tab">
            <table className="manageEvent__table">
              <thead>
                <tr>
                  <th>우선순위</th>
                  <th>상품명</th>
                  <th>상품 금액</th>
                  <th>판매수</th>
                  <th>상태</th>
                  <th>삭제</th>
                </tr>
              </thead>
              <tbody>
                {this.props.events.eventsList.map((event, i) => {
                  return (
                    <tr onClick={() => this.moveEventEdit({ i })} key={i}>
                      <td>{event.priority}</td>
                      <td>{event.productName}</td>
                      <td>{event.price}</td>
                      <td>{event.purchased}</td>
                      <td>{event.status}</td>
                      <td>
                        <button
                          className="manageEvent__delete"
                          onClick={e =>
                            this.deleteEvent(
                              e,
                              event.hospitalCode,
                              event.productId
                            )
                          }
                        >
                          <img
                            src={trash}
                            className="manageEvent__trash"
                            alt="x"
                          />
                        </button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
            <Link to="/adminPage/uploadEvent" className="manageEvent__button">
              이벤트상품 등록하기
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default ManageEvent;
