import React, { Component } from 'react';
import 'styles/css/AdminPage/ManageHospital.css';

class ManageHospital extends Component {
  render() {
    return (
      <div className="manageHospital">
        <div className="manageHospital__wrapper">
          <div className="manageHospital__tab">
            <table border="1">
              <tr>
                <th>병원 코드</th>
                <th>병원 이름</th>
                <th>병원 위치</th>
                <th>관리자 계정</th>
              </tr>
              <td>
                <th>Wassup bro?</th>
              </td>
            </table>
          </div>
        </div>
      </div>
    );
  }
}

export default ManageHospital;
