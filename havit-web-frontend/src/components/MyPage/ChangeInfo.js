import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import 'styles/css/MyPage/ChangeInfo.css';

class ChangeInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      arr: [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31],
      month: 31,
      clinics: [
        '여드름',
        '주름',
        '기미',
        '잡티/주근깨',
        '흉터',
        '모공',
        '홍조',
        '제모',
        '튼살',
        '다크써클',
        '수분부족',
        '피부톤',
        '노화',
        '탈모',
        ' 점/검버섯',
        '볼꺼짐',
        '문신제거',
        '기타고민',
      ],
      regions: [
        '강남구',
        '강동구',
        '강북구',
        '강서구',
        '관악구',
        '광진구',
        '노원구',
        '도봉구',
        '마포구',
        '서초구',
        '서대문구',
        '송파구',
      ],
    };
    this.changeMonth = this.changeMonth.bind(this);
    this.changeUserInfo = this.changeUserInfo.bind(this);
  }

  componentDidMount() {
    this.props.getUserInfo(localStorage.getItem('email'));
  }

  changeMonth(e) {
    this.setState({
      month: this.state.arr[Number(e.currentTarget.value) - 1],
    });
  }

  changeUserInfo() {
    let data = [
      document.getElementById('email').value,
      document.getElementById('name').value,
      document.getElementById('txtMobile').value,
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
    setTimeout(() => {
      console.log(data);
      // this.props.addUserInfo(...data);
      // this.props.history.push('/signupend');
    }, 2000);
  }

  render() {
    console.log(this.props.userInfo.userInfo[0]);
    return (
      <div className="changeInfo">
        <div className="signup__tab">
          <h2 className="signup__title">정보 수정</h2>
          <h3 className="signup__label">이메일 주소</h3>
          <input
            id="email"
            type="email"
            className="signup__input"
            placeholder="이메일@도메인"
            value={localStorage.getItem('email')}
            disabled
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
          <div className="signup__box">
            <div className="signup__box3">
              <h3 className="signup__label">이름</h3>
              <input
                id="name"
                type="text"
                className="signup__input"
                placeholder="실명 한글 이름을 입력해주세요."
                disabled
                value={
                  this.props.userInfo.userInfo[0] &&
                  this.props.userInfo.userInfo[0].name
                }
              />
            </div>
            <div className="signup__box4">
              <h3 className="signup__label signup__gender">성별</h3>
              <label className="signup__labelText">
                <input
                  name="gender"
                  id="gender"
                  type="radio"
                  className="signup__checkbox"
                  value="여자"
                  // checked={this.props.userInfo.userInfo[0].gender === "여자"}
                />
                여자
              </label>
              <label className="signup__labelText">
                <input
                  name="gender"
                  id="gender"
                  type="radio"
                  className="signup__checkbox"
                  value="남자"
                  // checked={this.props.userInfo.userInfo[0].gender === "남자"}
                />
                남자
              </label>
            </div>
          </div>
          <div className="signup__box">
            <div className="signup__box3">
              <h3 className="signup__label">핸드폰 번호</h3>
              <input
                type="text"
                id="txtMobile"
                size="4"
                className="signup__input"
                placeholder="- 빼고 숫자만 입력"
                value={
                  this.props.userInfo.userInfo[0] &&
                  this.props.userInfo.userInfo[0].phone
                }
              />
            </div>
            <div className="signup__box4">
              <h3 className="signup__label">생년 월 일</h3>
              <select
                id="birthday1"
                className="signup__box1"
                // value={
                //   this.props.userInfo.userInfo[0] &&
                //   this.props.userInfo.userInfo[0].birthday.slice(0, 4)
                // }
              >
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
                value={
                  this.props.userInfo.userInfo[0] &&
                  this.props.userInfo.userInfo[0].birthday.slice(4, 6)
                }
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
              <select
                id="birthday3"
                className="signup__box2"
                value={
                  this.props.userInfo.userInfo[0] &&
                  this.props.userInfo.userInfo[0].birthday.slice(6, 8)
                }
              >
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
            </div>
          </div>
          <h3 className="signup__label">관심 지역</h3>
          {this.state.regions.map((region, i) => {
            return (
              <div className="signup__checkboxWrapper" key={i}>
                <label className="signup__text">
                  <input
                    name="likeArea"
                    type="checkbox"
                    className="signup__checkbox"
                    value={region}
                    // checked={this.props.userInfo.userInfo[0].likeArea.includes({region})}
                  />
                  {region}
                </label>
              </div>
            );
          })}
          <h3 className="signup__label">관심 부위</h3>
          {this.state.clinics.map((clinic, i) => {
            return (
              <div className="signup__checkboxWrapper" key={i}>
                <label className="signup__text">
                  <input
                    name="likePoint"
                    type="checkbox"
                    className="signup__checkbox"
                    value={clinic}
                    // checked={this.props.userInfo.userInfo[0].likePoint.includes({clinic})}
                  />
                  {clinic}
                </label>
              </div>
            );
          })}
          <h3 className="signup__label">병원 코드</h3>
          <input
            id="code"
            type="text"
            className="signup__input"
            placeholder="병원 관리자 전용입니다"
            value={
              (this.props.userInfo.userInfo[0] &&
                this.props.userInfo.userInfo[0].hospitalCode) ||
              ''
            }
          />
          <hr className="signup__hr" />
          <h6 className="signup__info">
            회원가입 시 이용약관, 개인정보 수집 및 이용에 동의로 간주합니다.
          </h6>
          <div className="signup__btn">
            <button onClick={this.changeUserInfo} className="signup__button">
              회원가입
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default ChangeInfo;
