import React, { Component } from 'react';
import { Nav, Banner, Product } from '../index';
import 'styles/css/Event/Event.css';

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
        <div className="event__category">
          <h2 className="event__title">이벤트</h2>
        </div>
        <Product products={this.props.events.eventsList} />
      </main>
    );
  }
}

export default Event;
