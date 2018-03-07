import React, { Component } from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'styles/css/Common/Banner.css';
class Banner extends Component {
  render() {
    return (
      <div className="banner">
        <Carousel
          showArrows={true}
          showThumbs={false}
          autoPlay={true}
          infiniteLoop={true}
          interval="3000"
        >
          <div>
            <img src="http://dummyimage.com/1440x360/000/fff" alt="banner" />
          </div>
          <div>
            <img src="http://dummyimage.com/1440x360/000/fff" alt="banner" />
          </div>
          <div>
            <img src="http://dummyimage.com/1440x360/000/fff" alt="banner" />
          </div>
        </Carousel>
      </div>
    );
  }
}

export default Banner;
