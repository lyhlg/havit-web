import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import 'styles/css/HospitalPage/HospitalMenu.css';

class HospitalMenu extends Component {
  render() {
    return (
      <div className="hospitalMenu">
        <div className="hospitalMenu__wrapper">
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
            <span>
              정산 : {this.props.payment.paymentList.count}건 /{' '}
              {this.props.payment.paymentList.price}원
            </span>
          </div>
        </div>
      </div>
    );
  }
}

export default HospitalMenu;
