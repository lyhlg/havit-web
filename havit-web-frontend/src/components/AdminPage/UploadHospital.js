import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import 'styles/css/AdminPage/UploadHospital.css';

class UploadHospital extends Component {
  constructor(props) {
    super(props);
    this.submitHospital = this.submitHospital.bind(this);
  }

  submitHospital() {
    this.props.addHospitalAdmin(
      document.getElementById('code').value,
      document.getElementById('name').value,
      document.getElementById('loc').value
    );
    window.location.href = '/adminPage/manageHospital';
  }

  render() {
    return (
      <div className="uploadHospital">
        <div className="uploadHospital__wrapper">
          <div className="uploadHospital__tab">
            <h2 className="uploadHospital__title">병원 추가</h2>
            <h3 className="uploadHospital__label">병원 코드</h3>
            <input
              type="text"
              id="code"
              className="uploadHospital__input"
              placeholder="병원 코드를 입력해주세요."
            />
            <h3 className="uploadHospital__label">병원 이름</h3>
            <input
              type="text"
              id="name"
              className="uploadHospital__input"
              placeholder="병원 이름을 입력해주세요."
            />
            <h3 className="uploadHospital__label">병원 위치</h3>
            <select id="loc" className="uploadHospital__dropdown">
              <option value="강남구">강남구</option>
              <option value="송파구">송파구</option>
              <option value="강동구">강동구</option>
            </select>
            <div className="uploadHospital__btn">
              <button
                onClick={this.submitHospital}
                className="uploadHospital__button"
              >
                병원 추가하기
              </button>
              <Link
                to="/adminPage/manageHospital"
                className="uploadHospital__button"
              >
                취소
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default UploadHospital;
