import React, { Component } from 'react';
import { WishListEntry } from '../index';

class WishList extends Component {
  render() {
    return (
      <div>
        {this.props.likeProducts &&
          this.props.likeProducts.likeProductsList.map((product, i) => {
            return <WishListEntry product={product} key={i} />;
          })}
      </div>
    );
  }
}

export default WishList;
