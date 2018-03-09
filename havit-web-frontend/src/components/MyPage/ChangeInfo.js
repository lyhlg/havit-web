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
        '점/검버섯',
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
      check: [false, 0],
    };
    this.changeMonth = this.changeMonth.bind(this);
    this.changeUserInfo = this.changeUserInfo.bind(this);
  }

  changeMonth(e) {
    this.setState({
      month: this.state.arr[Number(e.currentTarget.value) - 1],
    });
  }

  changeUserInfo() {
    const password =
      document.getElementById('password') === null
        ? ''
        : document.getElementById('password').value;
    let data = [
      localStorage.getItem('email'),
      password,
      this.props.userInfo.userInfo[0].auth,
      document.getElementById('name').value || '',
      Number(
        document
          .getElementById('txtMobile')
          .value.toString()
          .slice(1)
      ) || '',
      Number(
        document.getElementById('birthday1').value +
          document.getElementById('birthday2').value +
          document.getElementById('birthday3').value
      ),
      Array.prototype.map.call(
        document.querySelectorAll('input[name="gender"]:checked'),
        gender => gender.value
      )[0] || '',
      Array.prototype.map.call(
        document.querySelectorAll('input[name="likeArea"]:checked'),
        area => area.value
      ) || '',
      Array.prototype.map.call(
        document.querySelectorAll('input[name="likePoint"]:checked'),
        point => point.value
      ) || '',
      document.getElementById('code').value || '',
    ];
    if (
      !data[1] ||
      (data[1] && !/^[a-zA-Z0-9]{6,20}$/.test(data[1])) ||
      data[1] !== document.getElementById('password2').value ||
      data[4] === NaN ||
      data[4].toString().length < 9 ||
      data[4].toString().length > 10 ||
      data[5] === NaN ||
      !data[6].length ||
      !data[7].length ||
      !data[8].length
    ) {
      this.setState({
        check: [false, 1],
      });
    } else {
      // console.log(...data)
      this.props.addUserInfo(() => {
        window.location.href = '/mypage/changeInfo';
      }, ...data);
    }
  }

  render() {
    console.log(this.props.userInfo);
    return (
      <div className="changeInfo">
        <div className="changeInfo__tab">
          <h3 className="changeInfo__label">이메일 주소</h3>
          <input
            id="email"
            type="email"
            className="changeInfo__input"
            placeholder="이메일@도메인"
            value={localStorage.getItem('email')}
            style={{ backgroundColor: '#f7f8fb' }}
            disabled
          />
          {this.props.userInfo.userInfo[0] &&
            this.props.userInfo.userInfo[0].auth === 'local' && (
              <div>
                <h3 className="changeInfo__label">비밀번호 입력</h3>
                <input
                  id="password"
                  type="password"
                  className="changeInfo__input"
                  placeholder="영문, 숫자로 6자 이상 입력해주세요."
                />
                <h3 className="changeInfo__label">비밀번호 확인</h3>
                <input
                  id="password2"
                  type="password"
                  className="changeInfo__input"
                  placeholder="동일하게 다시 한 번 입력해주세요."
                />
              </div>
            )}
          <div className="changeInfo__box">
            <div className="changeInfo__box3">
              <h3 className="changeInfo__label">이름</h3>
              <input
                id="name"
                type="text"
                className="changeInfo__input"
                placeholder="실명 한글 이름을 입력해주세요."
                disabled
                style={{ backgroundColor: '#f7f8fb' }}
                value={
                  this.props.userInfo.userInfo[0] &&
                  this.props.userInfo.userInfo[0].name
                }
              />
            </div>
            <div className="changeInfo__box4">
              <h3 className="changeInfo__label changeInfo__gender">성별</h3>
              <label className="changeInfo__labelText">
                <input
                  name="gender"
                  id="gender"
                  type="radio"
                  className="changeInfo__checkbox"
                  value="여자"
                  defaultChecked={
                    this.props.userInfo.userInfo[0] &&
                    this.props.userInfo.userInfo[0].gender === '여자'
                  }
                />
                여자
              </label>
              <label className="changeInfo__labelText">
                <input
                  name="gender"
                  id="gender"
                  type="radio"
                  className="changeInfo__checkbox"
                  value="남자"
                  defaultChecked={
                    this.props.userInfo.userInfo[0] &&
                    this.props.userInfo.userInfo[0].gender === '남자'
                  }
                />
                남자
              </label>
            </div>
          </div>
          <div className="changeInfo__box">
            <div className="changeInfo__box3">
              <h3 className="changeInfo__label">핸드폰 번호</h3>
              <input
                type="text"
                id="txtMobile"
                className="changeInfo__input"
                placeholder="- 빼고 숫자만 입력"
                defaultValue={`0${this.props.userInfo.userInfo[0] &&
                  this.props.userInfo.userInfo[0].phone}`}
              />
            </div>
            <div className="changeInfo__box4">
              <h3 className="changeInfo__label">생년월일</h3>
              <select
                id="birthday1"
                className="changeInfo__box1"
                defaultValue={
                  this.props.userInfo.userInfo[0] &&
                  this.props.userInfo.userInfo[0].birthday
                    .toString()
                    .slice(0, 4)
                }
              >
                {Array(81)
                  .fill(1930)
                  .map((a, i) => {
                    return <option key={i}>{a + i}</option>;
                  })}
              </select>
              <select
                id="birthday2"
                className="changeInfo__box2"
                onChange={this.changeMonth}
                defaultValue={
                  this.props.userInfo.userInfo[0] &&
                  this.props.userInfo.userInfo[0].birthday
                    .toString()
                    .slice(4, 6)
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
                className="changeInfo__box2"
                defaultValue={
                  this.props.userInfo.userInfo[0] &&
                  this.props.userInfo.userInfo[0].birthday
                    .toString()
                    .slice(6, 8)
                }
              >
                <option disabled>일</option>
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
          <h3 className="changeInfo__label">관심 지역</h3>
          {this.state.regions.map((region, i) => {
            return (
              <div className="changeInfo__checkboxWrapper" key={i}>
                <label className="changeInfo__text">
                  <input
                    name="likeArea"
                    type="checkbox"
                    className="changeInfo__checkbox"
                    value={region}
                    defaultChecked={
                      this.props.userInfo.userInfo[0] &&
                      Array.prototype.includes.call(
                        this.props.userInfo.userInfo[0].likeAreas,
                        this.state.regions[i]
                      )
                    }
                  />
                  {region}
                </label>
              </div>
            );
          })}
          <h3 className="changeInfo__label">관심 부위</h3>
          {this.state.clinics.map((clinic, i) => {
            return (
              <div className="changeInfo__checkboxWrapper" key={i}>
                <label className="changeInfo__text">
                  <input
                    name="likePoint"
                    type="checkbox"
                    className="changeInfo__checkbox"
                    value={clinic}
                    defaultChecked={
                      this.props.userInfo.userInfo[0] &&
                      Array.prototype.includes.call(
                        this.props.userInfo.userInfo[0].likePoints,
                        this.state.clinics[i]
                      )
                    }
                  />
                  {clinic}
                </label>
              </div>
            );
          })}
          <h3 className="changeInfo__label">병원 코드</h3>
          <input
            id="code"
            type="text"
            className="changeInfo__input"
            placeholder="병원 관리자 전용입니다"
            defaultValue={
              this.props.userInfo.userInfo[0] &&
              this.props.userInfo.userInfo[0].hospitalCode
            }
          />
          <hr className="changeInfo__hr" />
          <h6 className="changeInfo__info">
            회원가입 시 이용약관, 개인정보 수집 및 이용에 동의로 간주합니다.
          </h6>
          <div className="changeInfo__btn">
            <button
              onClick={this.changeUserInfo}
              className="changeInfo__button"
            >
              회원정보 수정
            </button>
            {!this.state.check[0] &&
              this.state.check[1] > 0 && <p>올바른 값을 입력하세요</p>}
          </div>
        </div>
      </div>
    );
  }
}

export default ChangeInfo;
