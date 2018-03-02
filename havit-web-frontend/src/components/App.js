import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import {
  Header,
  Login,
  Privacy,
  Signup,
  MyPage,
  SignupEnd,
  Home,
  Skin,
  Beauty,
  Event,
  ProductDetail,
  HospitalPage,
  AdminPage,
  Loading,
  NotFound,
  Footer,
  ServicePage,
} from './index';
import 'styles/css/index.css';

class App extends Component {
  constructor(props) {
    super(props);
    // this.checkAuth = this.checkAuth.bind(this);
  }

  // checkAuth(url) {
  //   if ( url.includes('adminPage') && localStorage.getItem('code') !== 3) {
  //     this.props.history.push('/login');
  //   }
  //   if ( url.includes('hospitalPage') && localStorage.getItem('code') < 2) {
  //     this.props.history.push('/login');
  //   }
  //   if ( url.includes('mypage') && localStorage.getItem('code') < 1) {
  //     this.props.history.push('/login');
  //   }
  //   if (!localStorage.getItem('email')) {
  //     this.props.history.push('/login');
  //   }
  // }

  render() {
    return (
      <div>
        <Header {...this.props} />
        <Switch>
          <Route exact path="/" render={props => <Home {...this.props} />} />
          <Route path="/login" render={props => <Login {...this.props} />} />
          <Route
            path="/privacy"
            render={props => <Privacy {...this.props} />}
          />
          <Route path="/signup" component={Signup} />
          <Route
            path="/mypage"
            render={props => (
              <MyPage checkAuth={this.checkAuth} {...this.props} />
            )}
          />
          <Route path="/signupend" component={SignupEnd} />
          <Route path="/skin" render={props => <Skin {...this.props} />} />
          <Route path="/beauty" render={props => <Beauty {...this.props} />} />
          <Route path="/event" component={Event} />
          <Route
            path="/adminPage"
            render={props => <AdminPage {...this.props} />}
          />
          <Route path="/loading" component={Loading} />
          <Route
            path="/products/:productId"
            render={props => <ProductDetail {...this.props} />}
          />
          <Route
            path="/hospitalPage"
            render={props => (
              <HospitalPage checkAuth={this.checkAuth} {...this.props} />
            )}
          />
          <Route
            path="/servicePage"
            render={props => (
              <ServicePage checkAuth={this.checkAuth} {...this.props} />
            )}
          />
          <Route component={NotFound} />
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default App;
