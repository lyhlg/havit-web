import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { Menu, Reserve, WishList, ChangeInfo, Loading } from '../index';
import 'styles/css/MyPage/MyPage.css';

class MyPage extends Component {
  componentDidMount() {
    this.props.getUserInfo(localStorage.getItem('email'));
    if (localStorage.getItem('code') === '3') {
      this.props.getReservations(localStorage.getItem('email'), '', 1);
      this.props.getLikeProducts(localStorage.getItem('email'));
    }
  }

  render() {
    console.log(this.props.userInfo);
    return (
      <main>
        {this.props.userInfo.loading ? (
          <Loading />
        ) : (
          <div className="myPage">
            <Menu />
            {localStorage.getItem('code') === '3' && (
              <Route
                path="/mypage/reserve"
                render={props => <Reserve {...this.props} />}
              />
            )}
            {localStorage.getItem('code') === '3' && (
              <Route
                path="/mypage/wishList"
                render={props => <WishList {...this.props} />}
              />
            )}
            <Route
              path="/mypage/changeInfo"
              render={props => <ChangeInfo {...this.props} />}
            />
          </div>
        )}
      </main>
    );
  }
}

export default MyPage;
