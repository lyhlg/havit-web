import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { ProductDetail } from '../index';

class ProductEntry extends Component {
  render() {
    return (
      <div>
        <Link to="/detail" className="header__link">
          <img src={this.props.ssupDummy.img} alt="product" />
        </Link>
        <h4>{this.props.ssupDummy.hospitalLoc}</h4>
        <h3>{this.props.ssupDummy.title}</h3>
        <h5>{this.props.ssupDummy.description}</h5>
        <h4>{this.props.ssupDummy.purchased}</h4>
        <h4>{this.props.ssupDummy.price}</h4>
      </div>
    );
  }
}

export default ProductEntry;
