import React, { Component } from 'react';
import { Nav, Banner, Product } from '../index';

class Event extends Component {
  componentDidMount() {
    this.props.getEvents(localStorage.getItem('email'), '', 0, 1);
  }
  render() {
    console.log(this.props);
    return (
      <main>
        <Nav />
        <Banner />
        <div className="home__category">
          <h2>이벤트</h2>
        </div>
        <Product products={this.props.events.eventsList} />
      </main>
    );
  }
}

export default Event;
