import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Privacy extends Component {
  render() {
    return (
      <div>
        <h2>회원가입</h2>
        <h3>이름</h3>
        <input type="text" placeholder="이름" />
        <h6>실명 한글 이름을 입력해주세요.</h6>
        <h3>휴대폰번호</h3>
        <select id="txtMobile1">
          <option value="010">010</option>
          <option value="011">011</option>
          <option value="016">016</option>
          <option value="017">017</option>
          <option value="019">019</option>
        </select>
        <span>-</span>
        <input type="text" id="txtMobile2" size="4" />
        <span>-</span>
        <input type="text" id="txtMobile3" size="4" />
        <h3>생년월일</h3>
        <select>
          <option>1995</option>
          <option>1996</option>
          <option>1997</option>
        </select>
        <span>년</span>
        <select>
          <option>1</option>
          <option>2</option>
          <option>3</option>
        </select>
        <span>월</span>
        <select>
          <option>1</option>
          <option>2</option>
          <option>3</option>
        </select>
        <span>일</span>
        <h6>로그인 정보를 찾을 때 이용됩니다. 정확히 입력해주세요.</h6>
        <h3>성별</h3>
        <input type="checkbox" />
        <label for="subscribeNews">남자</label>
        <input type="checkbox" />
        <label for="subscribeNews">여자</label>
        <h3>관심 지역</h3>
        <input type="checkbox" />
        <label for="subscribeNews">강남구</label>
        <input type="checkbox" />
        <label for="subscribeNews">강동구</label>
        <input type="checkbox" />
        <label for="subscribeNews">강북구</label>
        <input type="checkbox" />
        <label for="subscribeNews">강서구</label>
        <input type="checkbox" />
        <label for="subscribeNews">관악구</label>
        <input type="checkbox" />
        <label for="subscribeNews">광진구</label>
        <input type="checkbox" />
        <label for="subscribeNews">광진구</label>
        <input type="checkbox" />
        <label for="subscribeNews">광진구</label>
        <input type="checkbox" />
        <label for="subscribeNews">광진구</label>
        <input type="checkbox" />
        <label for="subscribeNews">광진구</label>
        <input type="checkbox" />
        <label for="subscribeNews">광진구</label>
        <input type="checkbox" />
        <label for="subscribeNews">광진구</label>
        <h3>관심 부위</h3>
        <input type="checkbox" />
        <label for="subscribeNews">피부</label>
        <input type="checkbox" />
        <label for="subscribeNews">여드름</label>
        <input type="checkbox" />
        <label for="subscribeNews">리프팅</label>
        <input type="checkbox" />
        <label for="subscribeNews">제모</label>
        <input type="checkbox" />
        <label for="subscribeNews">반영구</label>
        <input type="checkbox" />
        <label for="subscribeNews">미용주사</label>
        <hr />
        <h3>병원코드</h3>
        <input type="text" placeholder="병원코드" />
        <h4>병원 관리자 전용입니다</h4>
        <hr />
        <h3>
          회원가입 시 이용약관, 개인정보 수집 및 이용에 동의로 간주합니다.
        </h3>
        <button>
          <Link to="/signinend">회원가입 완료</Link>
        </button>
      </div>
    );
  }
}

export default Privacy;
