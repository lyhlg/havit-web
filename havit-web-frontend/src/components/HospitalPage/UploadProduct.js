import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import 'styles/css/HospitalPage/UploadProduct.css';
import { AWS_IMAGE_UPLOAD } from 'utils';

class UploadProduct extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedFile: null,
      type: true,
    };
    this.uploadProduct = this.uploadProduct.bind(this);
  }

  uploadProduct() {
    let data;
    console.log('upload Product 1');
    AWS_IMAGE_UPLOAD(
      'PRODUCT',
      document.getElementsByClassName('upload__img'),
      img => {
        console.log('Return img: ', img);
        data = [
          document.getElementById('type').value,
          document.getElementById('subType').value,
          img[0],
          localStorage.getItem('email'),
          document.getElementById('title').value,
          document.getElementById('description').value,
          Number(document.getElementById('price').value),
          img[1],
          document.getElementById('options').value.split(','),
        ];
        this.props.addProduct(...data, () => {
          window.location.href = '/hospitalPage/manageProduct';
        });
      }
    );
    console.log('upload Product 2');
  }

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

  handleSubType() {
    this.setState({
      type: !this.state.type,
    });
  }

  render() {
    console.log(this.props);
    return (
      <div className="uploadProduct">
        <div className="uploadProduct__wrapper">
          <div className="uploadProduct__tab">
            <h2 className="uploadProduct__title">상품등록</h2>
            <h3 className="uploadProduct__label">대분류</h3>
            <select
              id="type"
              className="uploadProduct__dropdown"
              onChange={this.handleSubType.bind(this)}
            >
              <option value="skin">피부시술</option>
              <option value="beauty">뷰티시술</option>
            </select>
            <h3 className="uploadProduct__label">소분류</h3>
            {this.state.type === true ? (
              <select id="subType" className="uploadProduct__dropdown">
                <option value="laser">피부레이저</option>
                <option value="scaling">스케일링</option>
                <option value="peeling">필링</option>
                <option value="waxing">제모</option>
                <option value="semi">반영구</option>
                <option value="shot">미용주사</option>
              </select>
            ) : (
              <select id="subType" className="uploadProduct__dropdown">
                <option value="filler">필러</option>
                <option value="botox">보톡스</option>
                <option value="outline">윤곽</option>
                <option value="lifting">리프팅</option>
              </select>
            )}
            <h3 className="uploadProduct__label">상품명</h3>
            <input
              type="text"
              id="title"
              className="uploadProduct__input"
              placeholder="상품명을 입력해주세요."
            />
            <h3 className="uploadProduct__label">상품 설명</h3>
            <input
              type="text"
              id="description"
              className="uploadProduct__input"
              placeholder="상품에 대한 정보를 한문장으로 입력해주세요."
            />
            <h3 className="uploadProduct__label">시술 금액</h3>
            <input
              type="text"
              id="price"
              className="uploadProduct__input"
              placeholder="시술 금액을 입력해주세요."
            />
            <h3 className="uploadProduct__label">상품 메인 이미지 업로드</h3>
            <input
              type="file"
              className="upload__img"
              onChange={this.fileSelectedHandler}
            />
            <h3 className="uploadProduct__label">상품 상세 이미지 업로드</h3>
            <input
              type="file"
              className="upload__img"
              onChange={this.fileSelectedHandler}
            />
            <h3 className="uploadProduct__label">옵션 설정</h3>
            <input
              type="text"
              id="options"
              className="uploadProduct__input"
              placeholder="옵션 리스트 ( 콤마로 구분지어 옵션 설정 )"
            />
            <div>
              <button
                className="uploadProduct__btn"
                onClick={this.uploadProduct}
              >
                상품 등록
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default UploadProduct;
