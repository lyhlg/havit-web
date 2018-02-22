import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { Menu, Reserve, WishList, ChangeInfo } from '../index';
import 'styles/css/MyPage/MyPage.css';

class MyPage extends Component {
  render() {
    return (
      <main>
        <Menu />
        <Route
          path="/mypage/reserve"
          render={props => (
            <Reserve
              getReservations={this.props.getReservations}
              reservations={this.props.reservations}
            />
          )}
        />
        <Route
          path="/mypage/wishList"
          render={props => <WishList {...this.props} />}
        />
        <Route
          path="/mypage/changeInfo"
          render={props => <WishList {...this.props} />}
        />
      </main>
    );
  }
}

export default MyPage;
