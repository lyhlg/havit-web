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
  HospitalPage,
} from './index';
import 'styles/css/index.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.checkAuth = this.checkAuth.bind(this);
  }

  checkAuth() {
    if (!this.props.email) {
      this.props.history.push(`/login`);
    }
  }

  render() {
    return (
      <div>
        <Header {...this.props} />
        <Route exact path="/" render={props => <Home {...this.props} />} />
        <Route path="/login" render={props => <Login {...this.props} />} />
        <Route path="/signup" component={Signup} />
        <Route
          path="/mypage"
          render={props => (
            <MyPage checkAuth={this.checkAuth} {...this.props} />
          )}
        />
        <Route path="/privacy" render={props => <Privacy {...this.props} />} />
        <Route path="/signupend" component={SignupEnd} />
        <Route path="/all" render={props => <All {...this.props} />} />
        <Route path="/skin" render={props => <Skin {...this.props} />} />
        <Route path="/beauty" render={props => <Beauty {...this.props} />} />
        <Route path="/event" component={Event} />
        <Route path="/detail" component={ProductDetail} />
        <Route path="/hospitalpage" component={HospitalPage} />
      </div>
    );
  }
}

export default App;
