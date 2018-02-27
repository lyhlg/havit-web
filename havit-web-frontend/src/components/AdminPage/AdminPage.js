import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import {
  AdminMenu,
  ManageHospital,
  Notice,
  ManageBanner,
  ManageEvent,
  UploadPage,
  UploadBanner,
  UploadHospital,
  Loading,
} from '../index';
import 'styles/css/AdminPage/AdminPage.css';

class AdminPage extends Component {
  componentDidMount() {
    this.props.getHospitalAdmin();
    this.props.getNotices();
    this.props.getBanners();
  }

  render() {
    console.log(this.props);
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
              <Route
                path="/adminPage/notice"
                render={props => <Notice {...this.props} />}
              />
              <Route
                path="/adminPage/manageBanner"
                render={props => <ManageBanner {...this.props} />}
              />
              <Route path="/adminPage/manageEvent" component={ManageEvent} />
              <Route path="/adminPage/uploadBanner" component={UploadBanner} />
              <Route
                path="/adminPage/uploadHospital"
                component={UploadHospital}
              />
            </div>
          </div>
        )}
      </main>
    );
  }
}

export default AdminPage;
