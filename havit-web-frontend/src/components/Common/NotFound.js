import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class NotFound extends Component {
  render() {
    return (
      <div>
        <Link to="/">안돼 돌아가 홈으로가즈아</Link>
      </div>
    );
  }
}

export default NotFound;
