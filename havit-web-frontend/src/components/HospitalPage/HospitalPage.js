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
      <main>
        <HospitalMenu />
        <Route path="/HospitalPage/CustomerInfo" component={CustomerInfo} />
        <Route path="/HospitalPage/UploadProduct" component={UploadProduct} />
        <Route path="/HospitalPage/ManageProduct" component={ManageProduct} />
        <Route path="/HospitalPage/Balance" component={Balance} />
      </main>
    );
  }
}

export default HospitalPage;
