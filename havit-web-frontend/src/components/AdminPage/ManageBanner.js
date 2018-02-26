import React, { Component } from 'react';
import 'styles/css/AdminPage/ManageBanner.css';

class ManageBanner extends Component {
  render() {
    console.log(this.props);
    return (
      <div className="manageBanner">
        <div className="manageBanner__wrapper">
          <div className="manageBanner__tab">
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
          </div>
        </div>
      </div>
    );
  }
}

export default ManageBanner;
