import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import 'styles/css/ServicePage/ServiceMenu.css';

class ServiceMenu extends Component {
  render() {
    return (
      <div className="serviceMenu">
        <div className="serviceMenu__wrapper">
          <h2 className="serviceMenu__name">고객센터</h2>
          <div className="serviceMenu__tab">
            <NavLink
              to="/servicePage/serviceCenter"
              className="serviceMenu__button"
              activeClassName="serviceMenu__button--selected"
            >
              고객센터
            </NavLink>
            <NavLink
              to="/servicePage/serviceNotice"
              className="serviceMenu__button"
              activeClassName="serviceMenu__button--selected"
            >
              공지사항
            </NavLink>
            <NavLink
              to="/servicePage/serviceFaq"
              className="serviceMenu__button"
              activeClassName="serviceMenu__button--selected"
            >
              FAQ
            </NavLink>
          </div>
        </div>
      </div>
    );
  }
}

export default ServiceMenu;
