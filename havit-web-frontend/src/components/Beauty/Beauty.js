import React, { Component } from 'react';
import { Banner, Product } from '../index';

class Beauty extends Component {
  render() {
    return (
      <div>
        <ul>
          <li>전체보기</li>
          <li>필러</li>
          <li>보톡스</li>
          <li>윤곽</li>
          <li>리프팅</li>
        </ul>
        <main>
          <Banner />
          <Product />
        </main>
      </div>
    );
  }
}

export default Beauty;
