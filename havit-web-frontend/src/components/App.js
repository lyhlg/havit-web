import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import {
  Header,
  Login,
  Signup,
  MyPage,
  Privacy,
  SignupEnd,
  Home,
  All,
  Skin,
  Beauty,
  Event,
  ProductDetail,
} from './index';
import 'styles/css/index.css';

class App extends Component {
  componentDidMount() {
    this.props.getProducts('skin');
  }

  render() {
    console.log(this.props);
    return (
      <div>
        <Header {...this.props} />
        <Route exact path="/" render={props => <Home {...this.props} />} />
        <Route path="/login" component={Login} />
        <Route path="/signup" component={Signup} />
        <Route path="/mypage" component={MyPage} />
        <Route path="/privacy" component={Privacy} />
        <Route path="/signupend" component={SignupEnd} />
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
