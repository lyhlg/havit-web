import React, { Component } from 'react';
import { ProductReserve, ProductInfo, Loading } from '../index';
import { Link, Route } from 'react-router-dom';
import 'styles/css/Common/ProductDetail.css';

class ProductDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      purchase: 'none',
      purchaseBtn: 'block',
    };
    this.handleReserve = this.handleReserve.bind(this);
    this.addLikeProduct = this.addLikeProduct.bind(this);
  }

  componentDidMount() {
    this.props.getProducts('', '', this.props.location.pathname.slice(10));
  }

  handleReserve() {
    this.setState({
      purchase: this.state.purchase === 'none' ? 'block' : 'none',
      purchaseBtn: this.state.purchaseBtn === 'none' ? 'block' : 'none',
    });
  }

  addLikeProduct() {
    this.props.addLikeProducts(
      localStorage.getItem('email'),
      Number(this.props.location.pathname.slice(10))
    );
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
    };
    const toggleBtn = {
      display: this.state.purchaseBtn,
    };
    return (
      <main>
        {this.props.products.loading ? (
          <Loading />
        ) : (
          <div className="productDetail">
            <div className="productDetail__category">
              <p>
                <Link to="/">홈</Link> >{' '}
                <Link
                  to={`/${this.props.products.productsList[0] &&
                    this.props.products.productsList[0].type}`}
                >
                  {this.props.products.productsList[0] &&
                    type[this.props.products.productsList[0].type]}
                </Link>{' '}
                >{' '}
                <Link
                  to={`/${this.props.products.productsList[0] &&
                    this.props.products.productsList[0].type}/${this.props
                    .products.productsList[0] &&
                    this.props.products.productsList[0].subType}`}
                >
                  {this.props.products.productsList[0] &&
                    type[this.props.products.productsList[0].subType]}
                </Link>
              </p>
            </div>
            <div className="productDetail__info">
              <div className="productDetail__img">
                <img
                  src={
                    this.props.products.productsList[0] &&
                    this.props.products.productsList[0].img
                  }
                  alt="detail"
                  align="left"
                />
              </div>
              <div className="productDetail__text">
                <h4 className="productDetail__hospital">
                  [{this.props.products.productsList[0] &&
                    this.props.products.productsList[0].hospitalLoc}]{' '}
                  {this.props.products.productsList[0] &&
                    this.props.products.productsList[0].hospitalName}
                </h4>
                <h3 className="productDetail__title">
                  {this.props.products.productsList[0] &&
                    this.props.products.productsList[0].productName}
                </h3>
                <h5 className="productDetail__description">
                  {this.props.products.productsList[0] &&
                    this.props.products.productsList[0].description}
                </h5>
                <div className="productDetail__sales">
                  <h4 className="productDetail__price">
                    {this.props.products.productsList[0] &&
                      this.props.products.productsList[0].price.toLocaleString(
                        'en'
                      )}원
                  </h4>
                  <h4 className="productDetail__purchased">
                    <span>
                      {this.props.products.productsList[0] &&
                        this.props.products.productsList[0].purchased}개{' '}
                    </span>구매
                  </h4>
                </div>
                <hr className="productDetail__divider" />

                {this.props.products.productsList[0] &&
                this.props.products.productsList[0].options ? (
                  <select id="option" className="productDetail__option">
                    <option>옵션 선택</option>
                    {this.props.products.productsList[0] &&
                      this.props.products.productsList[0].options.type.map(
                        (option, i) => {
                          return <option key={i}>{option}</option>;
                        }
                      )}
                  </select>
                ) : (
                  <select
                    id="option"
                    className="productDetail__option"
                    defaultValue="옵션 없음"
                  >
                    <option disabled>옵션 없음</option>
                  </select>
                )}
                <ProductReserve
                  purchase={this.state.purchase}
                  purchaseBtn={this.state.purchaseBtn}
                  handleReserve={this.handleReserve}
                  {...this.props}
                />
                <div className="productDetail__btnWrapper" style={toggleBtn}>
                  <button
                    onClick={this.handleReserve}
                    className="productDetail__reserveBtn"
                  >
                    예약하기
                  </button>
                  <button
                    className="productDetail__likeBtn"
                    onClick={this.addLikeProduct}
                  >
                    찜하기
                  </button>
                </div>
              </div>
            </div>
            <ProductInfo {...this.props} />
          </div>
        )}
      </main>
    );
  }
}

export default ProductDetail;
