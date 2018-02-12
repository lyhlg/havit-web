import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { Header, Nav, Login } from './index';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Nav />
        <Route path="/login" component={Login} />
      </div>
    );
  }
}

export default App;