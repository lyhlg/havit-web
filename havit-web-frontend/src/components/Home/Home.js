import React, { Component } from 'react';
import { Nav, Banner, Product } from '../index';
import { Link } from 'react-router-dom';
import 'styles/css/Home/Home.css';

class Home extends Component {
  componentDidMount() {
    this.props.getProducts();

    this.props.addReservation('jyt9319@gmail.com');
  }

  render() {
    console.log(this.props);
    return (
      <main>
        <Nav />
        <Banner />
        <div className="home__category">
          <h2>전체보기</h2>
          <p>
            <Link to="/all">더보기</Link>
          </p>
        </div>
        <Product products={this.props.products.productsList} />
        <div className="home__category">
          <h2>피부시술</h2>
          <p>더보기</p>
        </div>
        <Product products={this.props.products.productsList} />
        <div className="home__category">
          <h2>뷰티시술</h2>
          <p>더보기</p>
        </div>
        <Product products={this.props.products.productsList} />
      </main>
    );
  }
}

export default Home;
