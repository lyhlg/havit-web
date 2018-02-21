import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Admin extends Component {
  render() {
    return (
      <div className="admin">
        <div className="admin__wrapper">
          <div className="admin__tab">
            <h2 className="admin__title">상품 등록</h2>
            <h3 className="admin__label">대분류</h3>
            <select className="admin__dropdown">
              <option>전체보기</option>
              <option>피부시술</option>
              <option>뷰티시술</option>
              <option>이벤트</option>
            </select>
            <h3 className="admin__label">소분류</h3>
            <select className="admin__dropdown">
              <option>피부레이저</option>
              <option>스케일링</option>
              <option>필링</option>
              <option>제모</option>
              <option>반영구</option>
              <option>미용주사</option>
            </select>
            <h3 className="admin__label">이미지 업로드</h3>
            <button className="admin__img">upload img</button>
            <h3 className="admin__label">병원 코드</h3>
            <input
              type="text"
              className="admin__input"
              placeholder="병원 코드를 입력해주세요."
            />
            <h3 className="admin__label">병원 위치</h3>
            <input
              type="text"
              className="admin__input"
              placeholder="병원 위치를 입력해주세요."
            />
            <h3 className="admin__label">병원 이름</h3>
            <input
              type="text"
              className="admin__input"
              placeholder="병원 이름을 입력해주세요."
            />
            <h3 className="admin__label">상품명</h3>
            <input
              type="text"
              className="admin__input"
              placeholder="상품명을 입력해주세요."
            />
            <h3 className="admin__label">상품 설명</h3>
            <input
              type="text"
              className="admin__input"
              placeholder="상품에 대한 정보를 한문장으로 입력해주세요."
            />
            <h3 className="admin__label">시술금액</h3>
            <input
              type="text"
              className="admin__input"
              placeholder="시술금액을 입력해주세요."
            />
            <h3 className="admin__label">구매수</h3>
            <input
              type="text"
              className="admin__input"
              placeholder="상품의 총 판매량을 입력해주세요."
            />
            <h3 className="admin__label">제품 상세 이미지 업로드</h3>
            <button className="admin__img">upload img</button>
          </div>
        </div>
      </div>
    );
  }
}

export default Admin;
