import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom';
import { logo3 } from 'assets/img';
import 'styles/css/Header/Signup.css';

class Signup extends Component {
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
      document.getElementById('email').value,
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
    localStorage.removeItem('temp');
    this.props.history.push('/signupend');
  }

  render() {
    return (
      <div className="signup">
        <div className="signup__wrapper">
          <div className="signup__tab">
            <h2 className="signup__title">회원가입</h2>
            <h3 className="signup__label">이메일 주소</h3>
            <input
              id="email"
              type="email"
              className="signup__input"
              placeholder="이메일@도메인"
            />
            <h3 className="signup__label">비밀번호 입력</h3>
            <input
              id="password"
              type="password"
              className="signup__input"
              placeholder="영문, 숫자로 6자 이상 입력해주세요."
            />
            <h3 className="signup__label">비밀번호 확인</h3>
            <input
              type="password"
              className="signup__input"
              placeholder="동일하게 다시 한 번 입력해주세요."
            />
            <h3 className="signup__label">이름</h3>
            <input
              id="name"
              type="text"
              className="signup__input"
              placeholder="실명 한글 이름을 입력해주세요."
            />
            <h3 className="signup__label">핸드폰 번호</h3>
            <input
              type="text"
              id="txtMobile"
              size="4"
              className="signup__phone"
              placeholder="- 빼고 숫자만 입력"
            />
            <h3 className="signup__label">생년 월 일</h3>
            <select id="birthday1" className="signup__box1">
              <option selected disabled>
                년
              </option>
              {Array(81)
                .fill(1930)
                .map((a, i) => {
                  return <option key={i}>{a + i}</option>;
                })}
            </select>
            <select
              id="birthday2"
              className="signup__box2"
              onChange={this.changeMonth}
            >
              <option selected disabled>
                월
              </option>
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
            <select id="birthday3" className="signup__box2">
              <option selected disabled>
                일
              </option>
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
            <h3 className="signup__label">성별</h3>
            <input
              name="gender"
              id="gender"
              type="radio"
              className="signup__checkbox"
              value="여자"
            />
            <label className="signup__text">여자</label>
            <input
              name="gender"
              id="gender"
              type="radio"
              className="signup__checkbox"
              value="남자"
            />
            <label className="signup__text">남자</label>
            <h3 className="signup__label">관심 지역</h3>
            <input
              name="likeArea"
              type="checkbox"
              className="signup__checkbox"
              value="강남구"
            />
            <label className="signup__text">강남구</label>
            <input
              name="likeArea"
              type="checkbox"
              className="signup__checkbox"
              value="서초구"
            />
            <label className="signup__text">서초구</label>
            <input
              name="likeArea"
              type="checkbox"
              className="signup__checkbox"
              value="중구"
            />
            <label className="signup__text">중구</label>
            <input
              name="likeArea"
              type="checkbox"
              className="signup__checkbox"
              value="성동구"
            />
            <label className="signup__text">성동구</label>
            <input
              name="likeArea"
              type="checkbox"
              className="signup__checkbox"
              value="광진구"
            />
            <label className="signup__text">광진구</label>
            <input
              name="likeArea"
              type="checkbox"
              className="signup__checkbox"
              value="영등포구"
            />
            <label className="signup__text">영등포구</label>
            <h3 className="signup__label">관심 부위</h3>
            <input
              name="likePoint"
              type="checkbox"
              className="signup__checkbox"
              value="피부"
            />
            <label className="signup__text">피부</label>
            <input
              name="likePoint"
              type="checkbox"
              className="signup__checkbox"
              value="여드름"
            />
            <label className="signup__text">여드름</label>
            <input
              name="likePoint"
              type="checkbox"
              className="signup__checkbox"
              value="리프팅"
            />
            <label className="signup__text">리프팅</label>
            <input
              name="likePoint"
              type="checkbox"
              className="signup__checkbox"
              value="제모"
            />
            <label className="signup__text">제모</label>
            <input
              name="likePoint"
              type="checkbox"
              className="signup__checkbox"
              value="반영구"
            />
            <label className="signup__text">반영구</label>
            <input
              name="likePoint"
              type="checkbox"
              className="signup__checkbox"
              value="미용주사"
            />
            <label className="signup__text">미용주사</label>
            <hr />
            <h3 className="signup__label">병원코드</h3>
            <input
              id="code"
              type="text"
              className="signup__input"
              placeholder="병원코드"
            />
            <h6 className="signup__subtext">병원 관리자 전용입니다</h6>
            <hr />
            <h6 className="signup__info">
              회원가입 시 이용약관, 개인정보 수집 및 이용에 동의로 간주합니다.
            </h6>
            <button onClick={this.submitsignup} className="signup__button">
              <Link to="/signup" className="signup__btntext">
                회원가입
              </Link>
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default Signup;
