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
          showStatus={false}
          autoPlay={true}
          useKeyboardArrows={true}
          infiniteLoop={true}
          interval={3000}
        >
          {this.props.banners.bannersList.map((banner, i) => {
            return (
              <div key={i} onClick={() => this.props.history.push(banner.url)}>
                <img src={banner.img} alt="배너" />
              </div>
            );
          })}
        </Carousel>
      </div>
    );
  }
}

export default Banner;
