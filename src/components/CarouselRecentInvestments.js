import React from 'react';
import PropTypes from 'prop-types';

import Slider from 'react-slick';

import {
  Button,
  ExtendedBox,
  Image,
} from '../';

import smallLeftArrow from '../assets/carousel-arrow-small-left.svg';
import smallRightArrow from '../assets/carousel-arrow-small-right.svg';

class CarouselRecentInvestments extends React.Component {


  constructor(props) {
    super(props);

    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
    this.pauseCarousel = this.pauseCarousel.bind(this);

    this.state = { // Carousel settings change on click, so lives in state
      settings: {
        dots: false,
        infinite: true,
        speed: 1000,
        variableWidth: true, // This displays as much as there is space for.
        slidesToScroll: 1,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 6000,
        pauseOnHover: false,
        onSwipe: this.pauseCarousel, // Any form of navigation should pause, not just arrows
      },
    };
  }

  pauseCarousel() {
    this.setState({
      ...this.state,
      settings: {
        ...this.state.settings,
        autoplay:false,
      },
    });
  }

  next() {
    this.slider.slickNext();
    this.pauseCarousel();
  }
  previous() {
    this.slider.slickPrev();
    this.pauseCarousel();
  }

  render() {
    const {
      children,
    } = this.props;

    return (
      <ExtendedBox position="relative">
        <Slider ref={c => this.slider = c } {...this.state.settings} >
          {children}
        </Slider>
        <Button
          onClick={this.previous}
          position="absolute"
          bottom="-50px"
          left="50%"
          zIndex="2"
          ml={[-35, -40, -35, -40, -50]} // Accounts for width at various breakpoints
          bg="transparent"
          border="none" // Prevents browser defaulting styles on to button.
          outline="none" // Prevents browser defaulting styles on to button.
        >
          <Image
            src={smallLeftArrow}
            width={[15, 20, 15, 20, 25]}
            height={[15, 20, 15, 20, 25]}
            hover={true}
            dimOnButtonParentHover={true}
            transition="all 0.4s cubic-bezier(.25, .46, .45, .94)"
          />
        </Button>
        <Button
          onClick={this.next}
          position="absolute"
          bottom="-50px"
          left="50%"
          zIndex="2"
          ml={20}
          bg="transparent"
          border="none" // Prevents browser defaulting styles on to button.
          outline="none" // Prevents browser defaulting styles on to button.
        >
          <Image
            src={smallRightArrow}
            width={[15, 20, 15, 20, 25]}
            height={[15, 20, 15, 20, 25]}
            hover={true}
            dimOnButtonParentHover={true}
            transition="all 0.4s cubic-bezier(.25, .46, .45, .94)"
          />
        </Button>
      </ExtendedBox>
    );
  }
}


CarouselRecentInvestments.propTypes = {
  children: PropTypes.any,
};

export default CarouselRecentInvestments;
