import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import {
  AdminMenu,
  ManageHospital,
  Notice,
  ChangeNotice,
  ChangeBanner,
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
                render={props => <UploadHospital {...this.props} />}
              />
              <Route
                path="/adminPage/uploadBanner"
                render={props => <UploadBanner {...this.props} />}
              />
              <Route
                path="/adminPage/uploadEvent"
                render={props => <UploadEvent {...this.props} />}
              />
              <Route
                path="/adminPage/uploadNotice"
                render={props => <UploadNotice {...this.props} />}
              />
              <Route
                path="/adminPage/changeNotice/:id"
                render={props => <ChangeNotice {...this.props} />}
              />
              <Route
                path="/adminPage/changeBanner/:id"
                render={props => <ChangeBanner {...this.props} />}
              />
            </div>
          </div>
        )}
      </main>
    );
  }
}

export default AdminPage;
