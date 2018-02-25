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
} from './index';
import 'styles/css/index.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.checkAuth = this.checkAuth.bind(this);
  }

  checkAuth() {
    if (!localStorage.getItem('email')) {
      this.props.history.push('/login');
    }
  }

  render() {
    console.log(this.props.products);
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
          <Route path="/adminpage" component={AdminPage} />
          <Route path="/loading" component={Loading} />
          <Route
            path="/products/:productId"
            render={props => <ProductDetail {...this.props} />}
          />
          <Route
            path="/hospitalpage"
            render={props => <HospitalPage {...this.props} />}
          />
        </Switch>
      </div>
    );
  }
}

export default App;
