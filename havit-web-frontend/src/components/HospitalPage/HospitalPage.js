import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import {
  HospitalMenu,
  CustomerInfo,
  UploadProduct,
  ManageProduct,
  ChangeProduct,
  Loading,
} from '../index';
import 'styles/css/HospitalPage/HospitalPage.css';

class HospitalPage extends Component {
  componentWillMount() {
    // this.props.checkAuth(this.props.history.location.pathname);
  }
  componentDidMount() {
    if (localStorage.getItem('code') === '2') {
      this.props.getHospital(localStorage.getItem('email'));
      this.props.getPayment(localStorage.getItem('email'));
    } else if (localStorage.getItem('code') === '1') {
      this.props.getHospital(localStorage.getItem('hospital'));
      this.props.getPayment(localStorage.getItem('hospital'));
      localStorage.removeItem('hospital');
    }
  }

  render() {
    return (
      <main>
        {this.props.hospital.loading ? (
          <Loading />
        ) : (
          <div className="hospitalPage">
            <HospitalMenu payment={this.props.payment} />
            <Route
              path="/hospitalPage/customerInfo"
              render={props => <CustomerInfo {...this.props} />}
            />
            <Route
              path="/hospitalPage/uploadProduct"
              render={props => <UploadProduct {...this.props} />}
            />
            <Route
              path="/hospitalPage/manageProduct"
              render={props => <ManageProduct {...this.props} />}
            />
            <Route
              path="/hospitalPage/changeProduct/:id"
              render={props => <ChangeProduct {...this.props} />}
            />
          </div>
        )}
      </main>
    );
  }
}

export default HospitalPage;
