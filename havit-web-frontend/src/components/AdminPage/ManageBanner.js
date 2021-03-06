import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { trash } from 'assets/img';
import 'styles/css/AdminPage/ManageBanner.css';

class ManageBanner extends Component {
  constructor(props) {
    super(props);
    this.moveBannerEdit = this.moveBannerEdit.bind(this);
    this.deleteBanner = this.deleteBanner.bind(this);
  }

  moveBannerEdit(i) {
    this.props.history.push(`/adminPage/changeBanner/${i.i}`);
  }

  deleteBanner(e, id) {
    e.stopPropagation();
    if (window.confirm('삭제하시겠습니까?')) {
      this.props.delBanner(id, () => {
        window.location.href = '/adminPage/manageBanner';
      });
    }
  }

  render() {
    return (
      <div className="manageBanner">
        <div className="manageBanner__wrapper">
          <div className="manageBanner__tab">
            <table className="manageBanner__table">
              <thead>
                <tr>
                  <th>우선순위</th>
                  <th>상품명</th>
                  <th>상품 URL</th>
                  <th>삭제</th>
                </tr>
              </thead>
              <tbody>
                {this.props.banners.bannersList.map((banner, i) => {
                  return (
                    <tr onClick={() => this.moveBannerEdit({ i })} key={i}>
                      <td>{banner.priority}</td>
                      <td>{banner.title}</td>
                      <td>{banner.url}</td>
                      <td>
                        <button
                          className="manageBanner__delete"
                          onClick={e => this.deleteBanner(e, banner._id)}
                        >
                          <img
                            src={trash}
                            className="manageBanner__trash"
                            alt="x"
                          />
                        </button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
            <Link to="/adminPage/uploadBanner" className="manageBanner__button">
              배너상품 등록하기
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default ManageBanner;
