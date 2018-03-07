import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import 'styles/css/AdminPage/ChangeNotice.css';

import { AWS_IMAGE_UPLOAD } from 'utils';

class ChangeBanner extends Component {
  constructor(props) {
    super(props);
    this.submitBanner = this.submitBanner.bind(this);
  }

  componentDidMount() {
    this.props.getBanners();
  }

  submitBanner() {
    let data;
    AWS_IMAGE_UPLOAD(
      'PRODUCT',
      document.getElementsByClassName('upload__img'),
      img => {
        return this.props.addBanner(
          img[0],
          document.getElementById('title').value,
          document.getElementById('url').value,
          document.getElementById('priority').value,
          () => {
            window.location.href = '/adminPage/manageBanner';
          }
        );
      }
    );
  }

  render() {
    return (
      <div className="uploadBanner">
        <div className="uploadBanner__wrapper">
          <div className="uploadBanner__tab">
            <h2 className="uploadBanner__title">배너상품 등록</h2>
            <h3 className="uploadBanner__label">우선순위</h3>
            <select
              id="priority"
              className="uploadBanner__dropdown"
              defaultValue={
                this.props.banners.bannersList[0] &&
                this.props.banners.bannersList[
                  Number(window.location.pathname.slice(24))
                ].priority
              }
            >
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
            </select>
            <h3 className="uploadBanner__label">상품명</h3>
            <input
              type="text"
              id="title"
              className="uploadBanner__input"
              placeholder="상품명을 입력해주세요."
              defaultValue={
                this.props.banners.bannersList[0] &&
                this.props.banners.bannersList[
                  Number(window.location.pathname.slice(24))
                ].title
              }
            />
            <h3 className="uploadBanner__label">상품 URL</h3>
            <input
              type="text"
              id="url"
              className="uploadBanner__input"
              placeholder="상품 URL을 입력해주세요."
              defaultValue={
                this.props.banners.bannersList[0] &&
                this.props.banners.bannersList[
                  Number(window.location.pathname.slice(24))
                ].url
              }
            />
            <h3 className="uploadBanner__label">배너 이미지 업로드</h3>
            <input type="file" className="uploadBanner__img" />
            <div className="uploadBanner__btn">
              <a onClick={this.submitBanner} className="uploadBanner__button">
                배너상품 수정하기
              </a>
              <Link
                to="/adminPage/manageBanner"
                className="uploadBanner__button"
              >
                취소
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ChangeBanner;
