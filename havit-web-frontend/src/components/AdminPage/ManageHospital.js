import React, { Component } from 'react';
import 'styles/css/AdminPage/ManageHospital.css';

class ManageHospital extends Component {
  render() {
    console.log(this.props);
    return (
      <div className="manageHospital">
        <div className="manageHospital__wrapper">
          <div className="manageHospital__tab">
            <input
              name="keyword"
              className="manageHospital__right"
              placeholder=" Search"
            />
            <table className="manageHospital__table">
              <thead>
                <tr>
                  <th>병원 코드</th>
                  <th>병원 이름</th>
                  <th>병원 위치</th>
                  <th>관리자 계정</th>
                </tr>
              </thead>
              <tbody>
                {this.props.hospitalAdmin.hospitalAdminList.map(
                  (hospital, i) => {
                    return (
                      <tr key={i}>
                        <td>{hospital.code}</td>
                        <td>{hospital.name}</td>
                        <td>{hospital.loc}</td>
                        <td>{hospital.adminAccount}</td>
                      </tr>
                    );
                  }
                )}
              </tbody>
            </table>
            <button className="manageHospital__button">병원 추가하기</button>
          </div>
        </div>
      </div>
    );
  }
}

export default ManageHospital;
