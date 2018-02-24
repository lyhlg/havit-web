import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import 'styles/css/HospitalPage/HospitalMenu.css';

class HospitalMenu extends Component {
  render() {
    return (
      <div className="hospitalMenu">
        <h2 className="hospitalMenu__name">병원관리</h2>
        <div className="hospitalMenu__tab">
          <NavLink
            to="/hospitalPage/customerInfo"
            className="hospitalMenu__button"
            activeClassName="hospitalMenu__button--selected"
          >
            고객정보
          </NavLink>
          <NavLink
            to="/hospitalPage/uploadProduct"
            className="hospitalMenu__button"
            activeClassName="hospitalMenu__button--selected"
          >
            상품등록
          </NavLink>
          <NavLink
            to="/hospitalPage/manageProduct"
            className="hospitalMenu__button"
            activeClassName="hospitalMenu__button--selected"
          >
            상품관리
          </NavLink>
          <NavLink
            to="/hospitalPage/balance"
            className="hospitalMenu__button"
            activeClassName="hospitalMenu__button--selected"
          >
            정산
          </NavLink>
        </div>
      </div>
    );
  }
}

export default HospitalMenu;
