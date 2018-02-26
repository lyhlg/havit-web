import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import {
  AdminMenu,
  ManageHospital,
  Notice,
  ManageBanner,
  ManageEvent,
  Loading,
} from '../index';
import 'styles/css/AdminPage/AdminPage.css';

class AdminPage extends Component {
  componentDidMount() {
    this.props.getHospitalAdmin();
  }

  render() {
    return (
      <main>
        {this.props.hospitalAdmin.loading ? (
          <Loading />
        ) : (
          <div className="adminPage">
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
          </div>
        )}
      </main>
    );
  }
}

export default AdminPage;
