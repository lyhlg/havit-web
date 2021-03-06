import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { trash } from 'assets/img';
import 'styles/css/AdminPage/ManageHospital.css';

class ManageHospital extends Component {
  constructor(props) {
    super(props);
    this.moveHospital = this.moveHospital.bind(this);
    this.delHospital = this.delHospital.bind(this);
  }

  moveHospital(e) {
    if (e.currentTarget.childNodes[3].textContent !== '미등록') {
      localStorage.setItem(
        'hospital',
        e.currentTarget.childNodes[3].textContent
      );
      this.props.history.push('/hospitalPage/customerInfo');
    }
  }

  delHospital(e) {
    if (window.confirm('삭제하시겠습니까?')) {
      this.props.delHospitalAdmin(
        e.currentTarget.parentNode.parentNode.childNodes[0].textContent,
        () => {
          window.location.href = '/adminPage/manageHospital';
        }
      );
    }
  }

  render() {
    console.log(this.props);
    return (
      <div className="manageHospital">
        <div className="manageHospital__wrapper">
          <div className="manageHospital__tab">
            <table className="manageHospital__table">
              <thead>
                <tr>
                  <th>병원 코드</th>
                  <th>병원 이름</th>
                  <th>병원 위치</th>
                  <th>관리자 계정</th>
                  <th>삭제</th>
                </tr>
              </thead>
              <tbody>
                {this.props.hospitalAdmin.hospitalAdminList.map(
                  (hospital, i) => {
                    return (
                      <tr key={i} onClick={this.moveHospital}>
                        <td>{hospital.code}</td>
                        <td>{hospital.name}</td>
                        <td>{hospital.loc}</td>
                        <td>{hospital.adminAccount}</td>
                        <td>
                          <button
                            className="manageHospital__delete"
                            onClick={this.delHospital}
                          >
                            <img
                              src={trash}
                              className="manageHospital__trash"
                              alt="x"
                            />
                          </button>
                        </td>
                      </tr>
                    );
                  }
                )}
              </tbody>
            </table>
            <Link
              to="/adminPage/uploadHospital"
              className="manageHospital__button"
            >
              병원 추가하기
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default ManageHospital;
