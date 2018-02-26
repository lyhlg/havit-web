import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import 'styles/css/HospitalPage/UploadProduct.css';
import axios from 'axios';

class UploadProduct extends Component {
  state = {
    selectedFile: null,
  };

  fileSelectedHandler = event => {
    console.log(event.target.files[0]);
    this.setState({
      selectedFile: event.target.files[0],
    });
  };

  fileUploadHandler = () => {
    // const fd = new FormData();
    // fd.append('image', this.state.selectedFile, this.state.selectedFile.name);
    // axios.post('', fd);
    //   .then(res => {
    // console.log(res);
    // });
  };

  render() {
    return (
      <div className="uploadProduct">
        <div className="uploadProduct__wrapper">
          <div className="uploadProduct__tab">
            <h2 className="uploadProduct__title">상품등록</h2>
            <h3 className="uploadProduct__label">대분류</h3>
            <select className="uploadProduct__dropdown">
              <option>전체보기</option>
              <option>피부시술</option>
              <option>뷰티시술</option>
              <option>이벤트</option>
            </select>
            <h3 className="uploadProduct__label">소분류</h3>
            <select className="uploadProduct__dropdown">
              <option>피부레이저</option>
              <option>스케일링</option>
              <option>필링</option>
              <option>제모</option>
              <option>반영구</option>
              <option>미용주사</option>
            </select>
            <h3 className="uploadProduct__label">이미지 업로드</h3>
            <input
              type="file"
              className="uploadProduct__img"
              onChange={this.fileSelectedHandler}
            />
            <button onClick={this.fileUploadHandler}>Upload</button>
            <h3 className="uploadProduct__label">상품명</h3>
            <input
              type="text"
              className="uploadProduct__input"
              placeholder="상품명을 입력해주세요."
            />
            <h3 className="uploadProduct__label">상품 설명</h3>
            <input
              type="text"
              className="uploadProduct__inputbig"
              placeholder="상품에 대한 정보를 한문장으로 입력해주세요."
            />
            <h3 className="uploadProduct__label">시술 금액</h3>
            <input
              type="text"
              className="uploadProduct__input"
              placeholder="시술 금액을 입력해주세요."
            />
            <h3 className="uploadProduct__label">제품 상세 이미지 업로드</h3>
            <input
              type="file"
              className="uploadProduct__img"
              onChange={this.fileSelectedHandler}
            />
            <button onClick={this.fileUploadHandler}>Upload</button>
            <div>
              <button className="uploadProduct__btn">상품 등록</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default UploadProduct;
