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
          <Route path="/AdminPage/ManageHospital" component={ManageHospital} />
          <Route path="/AdminPage/Notice" component={Notice} />
          <Route path="/AdminPage/ManageBanner" component={ManageBanner} />
          <Route path="/AdminPage/ManageEvent" component={ManageEvent} />
        </div>
      </main>
    );
  }
}

export default AdminPage;
