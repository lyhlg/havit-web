import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import 'styles/css/Header/Privacy.css';

class Privacy extends Component {
  render() {
    return (
      <div className="privacy">
        <div className="privacy__wrapper">
          <div className="privacy__tab">
            <h2 className="privacy__title">회원가입</h2>
            <h3 className="privacy__label">이름</h3>
            <input
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
            <select className="privacy__box3">
              <option>1995</option>
              <option>1996</option>
              <option>1997</option>
            </select>
            <span>년</span>
            <select className="privacy__box4">
              <option>1</option>
              <option>2</option>
              <option>3</option>
            </select>
            <span>월</span>
            <select className="privacy__box4">
              <option>1</option>
              <option>2</option>
              <option>3</option>
            </select>
            <span>일</span>
            <h3 className="privacy__label">성별</h3>
            <input type="checkbox" className="privacy__checkbox" />
            <label for="subscribeNews" className="privacy__text">
              남자
            </label>
            <input type="checkbox" className="privacy__checkbox" />
            <label for="subscribeNews" className="privacy__text">
              여자
            </label>
            <h3 className="privacy__label">관심 지역</h3>
            <input type="checkbox" className="privacy__checkbox" />
            <label for="subscribeNews" className="privacy__text">
              강남구
            </label>
            <input type="checkbox" className="privacy__checkbox" />
            <label for="subscribeNews" className="privacy__text">
              서초구
            </label>
            <input type="checkbox" className="privacy__checkbox" />
            <label for="subscribeNews" className="privacy__text">
              중구
            </label>
            <input type="checkbox" className="privacy__checkbox" />
            <label for="subscribeNews" className="privacy__text">
              성동구
            </label>
            <input type="checkbox" className="privacy__checkbox" />
            <label for="subscribeNews" className="privacy__text">
              광진구
            </label>
            <input type="checkbox" className="privacy__checkbox" />
            <label for="subscribeNews" className="privacy__text">
              영등포구
            </label>
            <h3 className="privacy__label">관심 부위</h3>
            <input type="checkbox" className="privacy__checkbox" />
            <label for="subscribeNews" className="privacy__text">
              피부
            </label>
            <input type="checkbox" className="privacy__checkbox" />
            <label for="subscribeNews" className="privacy__text">
              여드름
            </label>
            <input type="checkbox" className="privacy__checkbox" />
            <label for="subscribeNews" className="privacy__text">
              리프팅
            </label>
            <input type="checkbox" className="privacy__checkbox" />
            <label for="subscribeNews" className="privacy__text">
              제모
            </label>
            <input type="checkbox" className="privacy__checkbox" />
            <label for="subscribeNews" className="privacy__text">
              반영구
            </label>
            <input type="checkbox" className="privacy__checkbox" />
            <label for="subscribeNews" className="privacy__text">
              미용주사
            </label>
            <hr />
            <h3 className="privacy__label">병원코드</h3>
            <input
              type="text"
              className="privacy__input"
              placeholder="병원코드"
            />
            <h6 className="privacy__subtext">병원 관리자 전용입니다</h6>
            <hr />
            <h6 className="privacy__info">
              회원가입 시 이용약관, 개인정보 수집 및 이용에 동의로 간주합니다.
            </h6>
            <button className="privacy__btn">
              <Link to="/signupend" className="privacy__btntext">
                회원가입
              </Link>
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default Privacy;
