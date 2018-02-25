import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import {
  HospitalMenu,
  CustomerInfo,
  UploadProduct,
  ManageProduct,
  Balance,
} from '../index';
import 'styles/css/HospitalPage/HospitalPage.css';

class HospitalPage extends Component {
  render() {
    return (
      <main className="hospitalPage">
        <div className="hospitalPage__wrapper">
          <HospitalMenu />
          <Route
            path="/HospitalPage/CustomerInfo"
            render={props => <CustomerInfo {...this.props} />}
          />
          <Route path="/HospitalPage/UploadProduct" component={UploadProduct} />
          <Route path="/HospitalPage/ManageProduct" component={ManageProduct} />
          <Route path="/HospitalPage/Balance" component={Balance} />
        </div>
      </main>
    );
  }
}

export default HospitalPage;
