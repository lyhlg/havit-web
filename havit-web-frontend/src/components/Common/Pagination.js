import React, { Component } from 'react';

class Pagination extends Component {
  render() {
    console.log(this.props.max);
    return (
      <div onClick={this.props.handlePage}>
        {Array(this.props.max)
          .fill(1)
          .map((num, i) => {
            return <span key={i}>{num + i}</span>;
          })}
      </div>
    );
  }
}

export default Pagination;
