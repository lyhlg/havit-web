import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class ChangeInfo extends Component {
  render() {
    return (
      <div>
        <h2>회원정보 수정</h2>
        <h3>이메일</h3>
        <input id="email" type="email" placeholder="수정불가" />
        <h6>이메일 아이디는 수정이 불가능합니다.</h6>
        <h3>비밀번호 (6~ 15자)</h3>
        <input type="password" placeholder="비밀번호" />
        <h6>영문, 숫자로 6자 이상 입력해주세요.</h6>
        <h3>비밀번호 확인</h3>
        <input type="password" placeholder="비밀번호 확인" />
        <h6>동일하게 다시 한 번 입력해주세요.</h6>
        <h3>이름</h3>
        <input type="text" placeholder="수정불가" />
        <h6>이름은 수정이 불가능합니다.</h6>
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
        <h3>닉네임</h3>
        <input type="text" placeholder="닉네임" />
        <h6>한글, 영문으로 입력해주세요.</h6>
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
        <hr />
        <h3>병원코드</h3>
        <input type="text" placeholder="병원코드" />
        <h6>병원 관리자 전용입니다</h6>
        <hr />
        <button>
          <Link to="/privacy">정보 수정</Link>
        </button>
      </div>
    );
  }
}

export default ChangeInfo;
