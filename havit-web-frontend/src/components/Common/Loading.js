import React, { Component } from 'react';
import 'styles/css/Common/Loading.css';

class Loading extends Component {
  render() {
    return (
      <div className="loading">
        <div className="loading__text">
          <h2>로딩중 입니다</h2>
        </div>
        <div className="loading__spinner">
          <div className="container">
            <div className="holder">
              <div className="box" />
            </div>
            <div className="holder">
              <div className="box" />
            </div>
            <div className="holder">
              <div className="box" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Loading;
