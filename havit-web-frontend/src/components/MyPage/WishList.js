import React, { Component } from 'react';
import { WishListEntry, Empty } from '../index';

class WishList extends Component {
  render() {
    return (
      <div>
        {this.props.likeProducts &&
        this.props.likeProducts.likeProductsList.length === 0 ? (
          <div className="empty">
            <p>찜한 상품이 없습니다</p>
          </div>
        ) : (
          this.props.likeProducts.likeProductsList.map((product, i) => {
            return <WishListEntry product={product} {...this.props} key={i} />;
          })
        )}
      </div>
    );
  }
}

export default WishList;
