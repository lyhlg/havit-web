import React, { Component } from 'react';
import 'styles/css/HospitalPage/ManageProduct.css';

class ManageProduct extends Component {
  constructor(props) {
    super(props);
    this.redirectProduct = this.redirectProduct.bind(this);
    this.moveProduct = this.moveProduct.bind(this);
    this.deleteProduct = this.deleteProduct.bind(this);
  }

  redirectProduct(e) {
    this.props.history.push(`/products/${e.currentTarget.id}`);
  }

  moveProduct(e, id) {
    e.stopPropagation();
    this.props.history.push(`/hospitalPage/changeProduct/${id}`);
  }

  deleteProduct(e, id) {
    e.stopPropagation();
    if (window.confirm('삭제하시겠습니까?')) {
      this.props.delProduct(id, () => {
        window.location.href = '/hospitalPage/manageProduct';
      });
    }
  }
  render() {
    const type = {
      skin: '피부시술',
      beauty: '뷰티시술',
      laser: '피부레이저',
      scaling: '스케일링',
      peeling: '필링',
      waxing: '제모',
      semi: '반영구',
      shot: '미용주사',
      filler: '필러',
      botox: '보톡스',
      outline: '윤곽',
      lifting: '리프팅',
      acne: '여드름',
    };
    return (
      <div className="manageProduct">
        <div className="manageProduct__wrapper">
          <div className="manageProduct__tab">
            {this.props.hospital.hospitalProducts &&
            this.props.hospital.hospitalProducts.length === 0 ? (
              <div>
                <p>없어</p>
              </div>
            ) : (
              <table className="table">
                <thead>
                  <tr>
                    <th>대분류</th>
                    <th>소분류</th>
                    <th>상품명</th>
                    <th>시술금액</th>
                    <th>구매수</th>
                    <th>리뷰수</th>
                    <th>변경/삭제</th>
                  </tr>
                </thead>
                <tbody>
                  {this.props.hospital.hospitalProducts &&
                    this.props.hospital.hospitalProducts.map((product, i) => {
                      return (
                        <tr
                          key={i}
                          id={product.productId}
                          onClick={this.redirectProduct}
                        >
                          <td>{type[product.type]}</td>
                          <td>{type[product.subType]}</td>
                          <td>{product.productName}</td>
                          <td>{product.price}</td>
                          <td>{product.purchased}</td>
                          <td>{product.reviews.length}</td>
                          <td>
                            <button
                              className="manageProduct__button1"
                              onClick={e =>
                                this.moveProduct(e, product.productId)
                              }
                            >
                              변경
                            </button>
                            <button
                              className="manageProduct__button2"
                              onClick={e =>
                                this.deleteProduct(e, product.productId)
                              }
                            >
                              삭제
                            </button>
                          </td>
                        </tr>
                      );
                    })}
                </tbody>
              </table>
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default ManageProduct;
