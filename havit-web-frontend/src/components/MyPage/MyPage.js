import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { Menu, Reserve, WishList, ChangeInfo, Loading } from '../index';
import 'styles/css/MyPage/MyPage.css';

class MyPage extends Component {
  componentDidMount() {
    this.props.getReservations(localStorage.getItem('email'), '', 1);
    this.props.getReservations(localStorage.getItem('email'));
  }

  render() {
    return (
      <main>
        {this.props.reservations.loading ? (
          <Loading />
        ) : (
          <div className="myPage">
            <Menu />
            <Route
              path="/mypage/reserve"
              render={props => <Reserve {...this.props} />}
            />
            <Route
              path="/mypage/wishList"
              render={props => <WishList {...this.props} />}
            />
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
