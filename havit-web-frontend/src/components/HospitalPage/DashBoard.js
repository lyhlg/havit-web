import React, { Component } from 'react';
import { Spinner } from '../index';

class DashBoard extends Component {
  render() {
    console.log(this.props);
    return (
      <div>
        {this.props.dashBoard.loading ? (
          <Spinner />
        ) : (
          <table className="table">
            <thead>
              <tr>
                <th>상품번호</th>
                <th>상품이름</th>
                <th>전체 수</th>
                <th>구매 수</th>
                <th>취소 수</th>
                <th>구매율</th>
                <th>별점</th>
              </tr>
            </thead>
            <tbody>
              {this.props.dashBoard.dashBoard &&
                this.props.dashBoard.dashBoard.map((product, i) => {
                  return (
                    <tr
                      key={i}
                      id={product._id}
                      onClick={() =>
                        this.props.history.push(`/products/${product._id}`)
                      }
                    >
                      <td>{product._id}</td>
                      <td>{product.products[0].productName}</td>
                      <td>{product.total}</td>
                      <td>{product.purchased}</td>
                      <td>{product.canceled}</td>
                      <td>{product.fix}</td>
                      <td>{product.stars}</td>
                    </tr>
                  );
                })}
            </tbody>
          </table>
        )}
      </div>
    );
  }
}

export default DashBoard;
