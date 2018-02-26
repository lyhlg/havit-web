import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import {
  HospitalMenu,
  CustomerInfo,
  UploadProduct,
  ManageProduct,
  Balance,
  Loading,
} from '../index';
import 'styles/css/HospitalPage/HospitalPage.css';

class HospitalPage extends Component {
  componentWillMount() {
    // this.props.checkAuth(this.props.history.location.pathname);
  }

  componentDidMount() {
    this.props.getHospital(localStorage.getItem('email'));
  }

  render() {
    console.log(this.props.hospital);
    return (
      <main>
        {this.props.hospital.loading ? (
          <Loading />
        ) : (
          <div className="hospitalPage">
            <HospitalMenu />
            <Route
              path="/HospitalPage/CustomerInfo"
              render={props => <CustomerInfo {...this.props} />}
            />
            <Route
              path="/HospitalPage/UploadProduct"
              render={props => <UploadProduct {...this.props} />}
            />
            <Route
              path="/HospitalPage/ManageProduct"
              render={props => <ManageProduct {...this.props} />}
            />
            <Route
              path="/HospitalPage/Balance"
              render={props => <Balance {...this.props} />}
            />
          </div>
        )}
      </main>
    );
  }
}

export default HospitalPage;
