import React, { Component } from 'react';
import { Banner } from '../index';

class Skin extends Component {
  render() {
    return (
      <div>
        <ul>
          <li>전체보기</li>
          <li>피부레이저</li>
          <li>스케일링</li>
          <li>필링</li>
          <li>제모</li>
          <li>반영구</li>
          <li>미용주사</li>
        </ul>
        <main>
          <Banner />
        </main>
      </div>
    );
  }
}

export default Skin;
