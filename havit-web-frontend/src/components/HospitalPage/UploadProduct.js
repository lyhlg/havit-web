import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import 'styles/css/HospitalPage/UploadProduct.css';

class UploadProduct extends Component {
  render() {
    return (
      <div className="uploadProduct">
        <div className="ploadProduct__wrapper">
          <div className="ploadProduct__tab">
            <h2 className="ploadProduct__title">상품등록</h2>
            <h3 className="ploadProduct__label">대분류</h3>
            <select className="ploadProduct__dropdown">
              <option>전체보기</option>
              <option>피부시술</option>
              <option>뷰티시술</option>
              <option>이벤트</option>
            </select>
            <h3 className="ploadProduct__label">소분류</h3>
            <select className="ploadProduct__dropdown">
              <option>피부레이저</option>
              <option>스케일링</option>
              <option>필링</option>
              <option>제모</option>
              <option>반영구</option>
              <option>미용주사</option>
            </select>
            <h3 className="ploadProduct__label">이미지 업로드</h3>
            <button className="ploadProduct__img">upload img</button>
            <h3 className="ploadProduct__label">상품명</h3>
            <input
              type="text"
              className="ploadProduct__input"
              placeholder="상품명을 입력해주세요."
            />
            <h3 className="ploadProduct__label">상품 설명</h3>
            <input
              type="text"
              className="ploadProduct__inputbig"
              placeholder="상품에 대한 정보를 한문장으로 입력해주세요."
            />
            <h3 className="ploadProduct__label">시술 금액</h3>
            <input
              type="text"
              className="ploadProduct__input"
              placeholder="시술 금액을 입력해주세요."
            />
            <h3 className="ploadProduct__label">제품 상세 이미지 업로드</h3>
            <button className="ploadProduct__img">upload img</button>
            <button className="ploadProduct__btn">상품 등록</button>
          </div>
        </div>
      </div>
    );
  }
}

export default UploadProduct;
