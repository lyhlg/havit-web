import React, { Component } from 'react';
import 'styles/css/Common/Pagination.css';

class Pagination extends Component {
  componentDidMount() {
    this.props.getMaxPage();
  }

  render() {
    return (
      <div onClick={this.props.handlePage} className="pagination">
        {Array(
          this.props.maxPage.maxPage[0] &&
            this.props.maxPage.maxPage[0].products_count
        )
          .fill(1)
          .map((num, i) => {
            return (
              <a key={i} className="pagination__btn">
                {num + i}
              </a>
            );
          })}
      </div>
    );
  }
}

export default Pagination;
