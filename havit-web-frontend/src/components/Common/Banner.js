import React, { Component } from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'styles/css/Common/Banner.css';
class Banner extends Component {
  componentDidMount() {
    this.props.getBanners();
  }

  render() {
    return (
      <div className="banner">
        <Carousel
          showArrows={true}
          showThumbs={false}
          autoPlay={true}
          infiniteLoop={true}
          interval={3000}
        >
          {this.props.banners.bannersList[0] &&
            this.props.banners.bannersList.map((banner, i) => {
              return (
                <div key={i}>
                  <img src={banner.img} />
                </div>
              );
            })}
        </Carousel>
      </div>
    );
  }
}

export default Banner;
