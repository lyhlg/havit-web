import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import {
  ServiceMenu,
  ServiceCenter,
  ServiceNotice,
  ServiceFaq,
  ServicePartner,
} from '../index';
import 'styles/css/ServicePage/ServicePage.css';

class ServicePage extends Component {
  render() {
    console.log(this.props);
    return (
      <main>
        <div className="servicePage">
          <div className="servicePage__wrapper">
            <ServiceMenu />
            <Route
              path="/servicePage/serviceCenter"
              render={props => <ServiceCenter {...this.props} />}
            />
            <Route
              path="/servicePage/serviceNotice"
              render={props => <ServiceNotice {...this.props} />}
            />
            <Route
              path="/servicePage/serviceFaq"
              render={props => <ServiceFaq {...this.props} />}
            />
            <Route
              path="/servicePage/servicePartner"
              render={props => <ServicePartner {...this.props} />}
            />
          </div>
        </div>
      </main>
    );
  }
}

export default ServicePage;
