import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import 'styles/css/Header/Privacy.css';

class Privacy extends Component {
  render() {
    return (
      <div className="privacy">
        <div className="privacy__wrapper">
          <h2 className="privacy__signuptext">회원가입</h2>
          <h3 className="privacy__name">이름</h3>
          <input
            type="text"
            className="privacy__namebox"
            placeholder="실명 한글 이름을 입력해주세요."
          />
          <h3 className="privacy__gender">성별</h3>
          <input type="checkbox" className="privacy__checkbox1" />
          <label for="subscribeNews" className="privacy__male">
            남자
          </label>
          <input type="checkbox" className="privacy__checkbox2" />
          <label for="subscribeNews" className="privacy__female">
            여자
          </label>
          <h3 className="privacy__phone">휴대폰번호</h3>
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
            className="privacy__box3"
          />
          <h3 className="privacy__birthday">생년월일</h3>
          <select className="privacy__year">
            <option>1995</option>
            <option>1996</option>
            <option>1997</option>
          </select>
          <span>년</span>
          <select className="privacy__month">
            <option>1</option>
            <option>2</option>
            <option>3</option>
          </select>
          <span>월</span>
          <select className="privacy__day">
            <option>1</option>
            <option>2</option>
            <option>3</option>
          </select>
          <span>일</span>
          <h3 className="privacy__likepoint">관심 부위</h3>
          <input type="checkbox" className="privacy__pointcheckbox1" />
          <label for="subscribeNews" className="privacy__pointchecktext1">
            피부
          </label>
          <input type="checkbox" className="privacy__pointcheckbox2" />
          <label for="subscribeNews" className="privacy__pointchecktext2">
            여드름
          </label>
          <input type="checkbox" className="privacy__pointcheckbox3" />
          <label for="subscribeNews" className="privacy__pointchecktext3">
            리프팅
          </label>
          <input type="checkbox" className="privacy__pointcheckbox4" />
          <label for="subscribeNews" className="privacy__pointchecktext4">
            제모
          </label>
          <input type="checkbox" className="privacy__pointcheckbox5" />
          <label for="subscribeNews" className="privacy__pointchecktext5">
            반영구
          </label>
          <input type="checkbox" className="privacy__pointcheckbox6" />
          <label for="subscribeNews" className="privacy__pointchecktext6">
            미용주사
          </label>
          <h3 className="privacy__likearea">관심 지역</h3>
          <input type="checkbox" />
          <label for="subscribeNews">강남구</label>
          <input type="checkbox" />
          <label for="subscribeNews">서초구</label>
          <input type="checkbox" />
          <label for="subscribeNews">중구</label>
          <input type="checkbox" />
          <label for="subscribeNews">성동구</label>
          <input type="checkbox" />
          <label for="subscribeNews">광진구</label>
          <input type="checkbox" />
          <label for="subscribeNews">영등포구</label>

          <hr />
          <h3>병원코드</h3>
          <input type="text" placeholder="병원코드" />
          <h6>병원 관리자 전용입니다</h6>
          <hr />
          <h6>
            회원가입 시 이용약관, 개인정보 수집 및 이용에 동의로 간주합니다.
          </h6>
          <button>
            <Link to="/signupend">회원가입 완료</Link>
          </button>
        </div>
      </div>
    );
  }
}

export default Privacy;
