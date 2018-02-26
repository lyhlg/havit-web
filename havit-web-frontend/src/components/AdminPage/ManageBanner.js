import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import 'styles/css/AdminPage/ManageBanner.css';

class ManageBanner extends Component {
  render() {
    console.log(this.props);
    return (
      <div className="manageBanner">
        <div className="manageBanner__wrapper">
          <div className="manageBanner__tab">
            <input
              name="keyword"
              className="manageHospital__right"
              placeholder=" Search"
            />
            <table className="manageBanner__table">
              <thead>
                <tr>
                  <th>번호</th>
                  <th>배너상품</th>
                  <th>URL</th>
                  <th>상태</th>
                </tr>
              </thead>
              <tbody>
                {this.props.banners.bannersList.map((banner, i) => {
                  return (
                    <tr key={i}>
                      <td>{banner.priority}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
            <button className="manageBanner__button">배너 등록하기</button>
            <NavLink
              to="/adminPage/uploadBanner"
              className="uploadBanner__button"
              activeClassName="uploadBanner__button--selected"
            >
              배너 등록하기
            </NavLink>
          </div>
        </div>
      </div>
    );
  }
}

export default ManageBanner;
