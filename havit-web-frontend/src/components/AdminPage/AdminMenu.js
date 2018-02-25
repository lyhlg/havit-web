import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import 'styles/css/AdminPage/AdminMenu.css';

class AdminMenu extends Component {
  render() {
    return (
      <div className="adminMenu">
        <div className="adminMenu__wrapper">
          <h2 className="adminMenu__name">Admin</h2>
          <div className="adminMenu__tab">
            <NavLink
              to="/adminPage/manageHospital"
              className="adminMenu__button"
              activeClassName="adminMenu__button--selected"
            >
              병원관리
            </NavLink>
            <NavLink
              to="/adminPage/notice"
              className="adminMenu__button"
              activeClassName="adminMenu__button--selected"
            >
              공지사항
            </NavLink>
            <NavLink
              to="/adminPage/manageBanner"
              className="adminMenu__button"
              activeClassName="adminMenu__button--selected"
            >
              배너관리
            </NavLink>
            <NavLink
              to="/adminPage/manageEvent"
              className="adminMenu__button"
              activeClassName="adminMenu__button--selected"
            >
              이벤트관리
            </NavLink>
          </div>
        </div>
      </div>
    );
  }
}

export default AdminMenu;
