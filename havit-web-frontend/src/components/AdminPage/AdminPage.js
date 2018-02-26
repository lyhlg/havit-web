import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import {
  AdminMenu,
  ManageHospital,
  Notice,
  ManageBanner,
  ManageEvent,
} from '../index';
import 'styles/css/AdminPage/AdminPage.css';

class AdminPage extends Component {
  render() {
    return (
      <main className="adminPage">
        <div className="adminPage__wrapper">
          <AdminMenu />
          <Route
            path="/adminPage/manageHospital"
            render={props => <ManageHospital {...this.props} />}
          />
          <Route path="/adminPage/notice" component={Notice} />
          <Route path="/adminPage/manageBanner" component={ManageBanner} />
          <Route path="/adminPage/manageEvent" component={ManageEvent} />
        </div>
      </main>
    );
  }
}

export default AdminPage;
