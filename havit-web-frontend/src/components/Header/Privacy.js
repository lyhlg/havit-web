import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import 'styles/css/Header/Privacy.css';

class Privacy extends Component {
  constructor(props) {
    super(props);
    this.state = {
      arr: [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31],
      month: 31,
    };
    this.changeMonth = this.changeMonth.bind(this);
    this.submitUserInfo = this.submitUserInfo.bind(this);
  }

  changeMonth(e) {
    this.setState({
      month: this.state.arr[Number(e.currentTarget.value) - 1],
    });
  }

  submitUserInfo() {
    let data = [
      localStorage.getItem('temp'),
      document.getElementById('name').value,
      document.getElementById('txtMobile1').value +
        document.getElementById('txtMobile2').value +
        document.getElementById('txtMobile3').value,
      document.getElementById('birthday1').value +
        document.getElementById('birthday2').value +
        document.getElementById('birthday3').value,
      document.querySelector('input[name="gender"]:checked').value,
      Array.prototype.map.call(
        document.querySelectorAll('input[name="likeArea"]:checked'),
        area => area.value
      ),
      Array.prototype.map.call(
        document.querySelectorAll('input[name="likePoint"]:checked'),
        point => point.value
      ),
      document.getElementById('code').value || '',
    ];
    console.log(data);
    this.props.addUserInfo(...data);
    localStorage.removeItem('temp'), this.props.history.push('/signupend');
  }

  render() {
    return (
      <div className="privacy">
        <div className="privacy__wrapper">
          <div className="privacy__tab">
            <h2 className="privacy__title">회원가입</h2>
            <h3 className="privacy__label">이름</h3>
            <input
              id="name"
              type="text"
              className="privacy__input"
              placeholder="실명 한글 이름을 입력해주세요."
            />
            <h3 className="privacy__label">휴대폰번호</h3>
            <select id="txtMobile1" className="privacy__box1">
              <option value="010">010</option>
              <option value="011">011</option>
              <option value="016">016</option>
              <option value="017">017</option>
              <option value="019">019</option>
            </select>
            <span>-</span>
            <input
              type="text"
              id="txtMobile2"
              size="4"
              className="privacy__box2"
            />
            <span>-</span>
            <input
              type="text"
              id="txtMobile3"
              size="4"
              className="privacy__box2"
            />
            <h3 className="privacy__label">생년월일</h3>
            <select id="birthday1" className="privacy__box3">
              {Array(81)
                .fill(1930)
                .map((a, i) => {
                  return <option key={i}>{a + i}</option>;
                })}
            </select>
            <span>년</span>
            <select
              id="birthday2"
              className="privacy__box4"
              onChange={this.changeMonth}
            >
              {Array(12)
                .fill(1)
                .map((a, i) => {
                  return (
                    <option key={i}>
                      {(a + i).toString().length < 2 ? '0' + (a + i) : a + i}
                    </option>
                  );
                })}
            </select>
            <span>월</span>
            <select id="birthday3" className="privacy__box4">
              {Array(this.state.month)
                .fill(1)
                .map((a, i) => {
                  return (
                    <option key={i}>
                      {(a + i).toString().length < 2 ? '0' + (a + i) : a + i}
                    </option>
                  );
                })}
            </select>
            <span>일</span>
            <h3 className="privacy__label">성별</h3>
            <input
              name="gender"
              id="gender"
              type="radio"
              className="privacy__checkbox"
              value="여자"
            />
            <label className="privacy__text">여자</label>
            <input
              name="gender"
              id="gender"
              type="radio"
              className="privacy__checkbox"
              value="남자"
            />
            <label className="privacy__text">남자</label>
            <h3 className="privacy__label">관심 지역</h3>
            <input
              name="likeArea"
              type="checkbox"
              className="privacy__checkbox"
              value="강남구"
            />
            <label className="privacy__text">강남구</label>
            <input
              name="likeArea"
              type="checkbox"
              className="privacy__checkbox"
              value="서초구"
            />
            <label className="privacy__text">서초구</label>
            <input
              name="likeArea"
              type="checkbox"
              className="privacy__checkbox"
              value="중구"
            />
            <label className="privacy__text">중구</label>
            <input
              name="likeArea"
              type="checkbox"
              className="privacy__checkbox"
              value="성동구"
            />
            <label className="privacy__text">성동구</label>
            <input
              name="likeArea"
              type="checkbox"
              className="privacy__checkbox"
              value="광진구"
            />
            <label className="privacy__text">광진구</label>
            <input
              name="likeArea"
              type="checkbox"
              className="privacy__checkbox"
              value="영등포구"
            />
            <label className="privacy__text">영등포구</label>
            <h3 className="privacy__label">관심 부위</h3>
            <input
              name="likePoint"
              type="checkbox"
              className="privacy__checkbox"
              value="피부"
            />
            <label className="privacy__text">피부</label>
            <input
              name="likePoint"
              type="checkbox"
              className="privacy__checkbox"
              value="여드름"
            />
            <label className="privacy__text">여드름</label>
            <input
              name="likePoint"
              type="checkbox"
              className="privacy__checkbox"
              value="리프팅"
            />
            <label className="privacy__text">리프팅</label>
            <input
              name="likePoint"
              type="checkbox"
              className="privacy__checkbox"
              value="제모"
            />
            <label className="privacy__text">제모</label>
            <input
              name="likePoint"
              type="checkbox"
              className="privacy__checkbox"
              value="반영구"
            />
            <label className="privacy__text">반영구</label>
            <input
              name="likePoint"
              type="checkbox"
              className="privacy__checkbox"
              value="미용주사"
            />
            <label className="privacy__text">미용주사</label>
            <hr />
            <h3 className="privacy__label">병원코드</h3>
            <input
              id="code"
              type="text"
              className="privacy__input"
              placeholder="병원코드"
            />
            <h6 className="privacy__subtext">병원 관리자 전용입니다</h6>
            <hr />
            <h6 className="privacy__info">
              회원가입 시 이용약관, 개인정보 수집 및 이용에 동의로 간주합니다.
            </h6>
            <button className="privacy__btn" onClick={this.submitUserInfo}>
              <a className="privacy__btntext">회원가입</a>
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default Privacy;
