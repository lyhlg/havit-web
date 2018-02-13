import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { Menu, Reserve, WishList, ChangeInfo } from '../index';
import 'styles/css/MyPage/MyPage.css';

class MyPage extends Component {
  render() {
    return (
      <main>
        <Menu />
        <Route path="/mypage/reserve" component={Reserve} />
        <Route path="/mypage/wishList" component={WishList} />
        <Route path="/mypage/changeInfo" component={ChangeInfo} />
      </main>
    );
  }
}

export default MyPage;
