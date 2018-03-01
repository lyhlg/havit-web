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
  UploadEvent,
  UploadNotice,
  Loading,
} from '../index';
import 'styles/css/AdminPage/AdminPage.css';

class AdminPage extends Component {
  componentDidMount() {
    this.props.getHospitalAdmin();
    this.props.getNotices();
    this.props.getBanners();
    this.props.getEvents();
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
              <Route
                path="/adminPage/manageEvent"
                render={props => <ManageEvent {...this.props} />}
              />
              <Route
                path="/adminPage/uploadHospital"
                component={UploadHospital}
              />
              <Route path="/adminPage/uploadBanner" component={UploadBanner} />
              <Route path="/adminPage/uploadEvent" component={UploadEvent} />
              <Route
                path="/adminPage/uploadNotice"
                render={props => <UploadNotice {...this.props} />}
              />
            </div>
          </div>
        )}
      </main>
    );
  }
}

export default AdminPage;
