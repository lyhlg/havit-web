import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import {
  Header,
  Nav,
  Login,
  Signin,
  MyPage,
  Privacy,
  SigninEnd,
  Home,
  All,
  Skin,
  Beauty,
  Event,
  ProductDetail,
} from './index';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Nav />
        <Route exact path="/" component={Home} />
        <Route path="/login" component={Login} />
        <Route path="/signin" component={Signin} />
        <Route path="/mypage" component={MyPage} />
        <Route path="/privacy" component={Privacy} />
        <Route path="/signinend" component={SigninEnd} />
        <Route path="/all" component={All} />
        <Route path="/skin" component={Skin} />
        <Route path="/beauty" component={Beauty} />
        <Route path="/event" component={Event} />
        <Route path="/detail" component={ProductDetail} />
      </div>
    );
  }
}

export default App;
