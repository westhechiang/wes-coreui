import React from 'react';
import PropTypes from 'prop-types';

import Slider from 'react-slick';

import {
  Button,
  ExtendedBox,
  Image,
} from '../';

import largeLeftArrow from '../assets/carousel-arrow-large-left.svg';
import largeRightArrow from '../assets/carousel-arrow-large-right.svg';

class CarouselLarge extends React.Component {
  constructor(props) {
    super(props);
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
  }
  next() {
    this.slider.slickNext();
  }
  previous() {
    this.slider.slickPrev();
  }

  render() {
    const {
      children,
    } = this.props;

    const settings = {
      dots: true,
      infinite: true,
      fade: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
    };

    return (
      <ExtendedBox position="relative">
        <Slider ref={c => this.slider = c } {...settings} >
          {children}
        </Slider>
        <Button
          onClick={this.previous}
          position="absolute"
          top="0"
          left="0"
          pl={[5, 40, 5, 15, 50]}
          zIndex="2"
          height="100%"
          bg="transparent"
          border="none" // Prevents browser defaulting styles on to button.
          outline="none" // Prevents browser defaulting styles on to button.
        >
          <Image
            src={largeLeftArrow}
            width={[15, 20, 15, 20, 30]}
            hover={true}
            dimOnButtonParentHover={true}
            transition="all 0.4s cubic-bezier(.25, .46, .45, .94)"
          />
        </Button>
        <Button
          onClick={this.next}
          position="absolute"
          top="0"
          right="0"
          pr={[5, 40, 5, 15, 50]}
          zIndex="2"
          height="100%"
          bg="transparent"
          border="none" // Prevents browser defaulting styles on to button.
          outline="none" // Prevents browser defaulting styles on to button.
        >
          <Image
            src={largeRightArrow}
            width={[15, 20, 15, 20, 30]}
            hover={true}
            dimOnButtonParentHover={true}
            transition="all 0.4s cubic-bezier(.25, .46, .45, .94)"
          />
        </Button>
      </ExtendedBox>
    );
  }
}


CarouselLarge.propTypes = {
  children: PropTypes.any,
};

export default CarouselLarge;
