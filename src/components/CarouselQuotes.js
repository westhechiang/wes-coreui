import React from 'react';
import PropTypes from 'prop-types';

import Slider from 'react-slick';

import {
  Button,
  ExtendedBox,
} from '../';

class CarouselQuotes extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {
      children,
    } = this.props;

    const settings = {
      dots: true,
      infinite: true,
      fade: true,
      speed: 750,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      autoplay: true,
      autoplaySpeed: 6000,
      pauseOnHover: false,
    };

    return (
      <ExtendedBox
        position="relative" // not strictly necessary, kept to ensure match with Large
      >
        <Slider {...settings} >
          {children}
        </Slider>
      </ExtendedBox>
    );
  }
}


CarouselQuotes.propTypes = {
  children: PropTypes.any,
};

export default CarouselQuotes;
