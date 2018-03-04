import React, { Component } from 'react';
import { WishListEntry } from '../index';

class WishList extends Component {
  componentDidMount() {
    this.props.getLikeProducts(localStorage.getItem('email'));
  }

  render() {
    return (
      <div>
        {this.props.likeProducts &&
          this.props.likeProducts.likeProductsList.map((product, i) => {
            return <WishListEntry product={product} {...this.props} key={i} />;
          })}
      </div>
    );
  }
}

export default WishList;
