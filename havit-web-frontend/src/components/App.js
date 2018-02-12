import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { Header, Nav, Login, Signin, Privacy } from './index';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Nav />
        <Route path="/login" component={Login} />
        <Route path="/signin" component={Signin} />
        <Route path="/privacy" component={Privacy} />
      </div>
    );
  }
}

export default App;