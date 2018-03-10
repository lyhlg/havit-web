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
  UserAgree,
  UserAgrees,
  Search,
} from './index';
import { up } from 'assets/img';
import 'styles/css/index.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.toTop = this.toTop.bind(this);
    this.checkAuth = this.checkAuth.bind(this);
  }

  toTop(scrollDuration) {
    var scrollStep = -window.scrollY / (scrollDuration / 15),
      scrollInterval = setInterval(function() {
        if (window.scrollY !== 0) {
          window.scrollBy(0, scrollStep);
        } else clearInterval(scrollInterval);
      }, 15);
  }

  checkAuth() {
    if (
      window.location.pathname.includes('adminPage') &&
      localStorage.getItem('code') !== '1'
    ) {
      this.props.history.push('/notFound');
    }
    if (
      window.location.pathname.includes('hospitalPage') &&
      !(
        localStorage.getItem('code') === '1' ||
        localStorage.getItem('code') === '2'
      )
    ) {
      this.props.history.push('/notFound');
    }
    if (
      window.location.pathname.includes('mypage') &&
      !(
        localStorage.getItem('code') === '1' ||
        localStorage.getItem('code') === '2' ||
        localStorage.getItem('code') === '3'
      )
    ) {
      this.props.history.push('/notFound');
    }
    if (!localStorage.getItem('email')) {
      this.props.history.push('/login');
    }
  }

  render() {
    return (
      <div>
        <Header {...this.props} />
        <Switch>
          <Route exact path="/" render={props => <Home {...this.props} />} />
          <Route path="/login" render={props => <Login {...this.props} />} />
          <Route path="/search" render={props => <Search {...this.props} />} />
          <Route
            path="/privacy"
            render={props => <Privacy {...this.props} />}
          />
          <Route path="/signup" render={props => <Signup {...this.props} />} />
          <Route
            path="/mypage"
            render={props => (
              <MyPage checkAuth={this.checkAuth} {...this.props} />
            )}
          />
          <Route path="/signupend" component={SignupEnd} />
          <Route path="/skin" render={props => <Skin {...this.props} />} />
          <Route path="/beauty" render={props => <Beauty {...this.props} />} />
          <Route path="/event" render={props => <Event {...this.props} />} />
          <Route
            path="/adminPage"
            render={props => (
              <AdminPage checkAuth={this.checkAuth} {...this.props} />
            )}
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
            render={props => <ServicePage {...this.props} />}
          />
          <Route component={UserAgree} />
          <Route component={UserAgrees} />
          <Route component={NotFound} />
        </Switch>
        <img
          className="toTop"
          onClick={() => {
            this.toTop(150);
          }}
          src={up}
          alt="화살표"
        />
        <Footer />
      </div>
    );
  }
}

export default App;
