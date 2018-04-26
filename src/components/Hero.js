import React from 'react';
import PropTypes from 'prop-types';
import {
  ExtendedBox,
  ExtendedFlex,
  Heading,
  VisibilitySensor,
} from '../';

class Hero extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isVisible: false,
    };
    this.handleSensorChange = this.handleSensorChange.bind(this);
  }

  handleSensorChange(isVisible) {
    if (isVisible) {
      this.setState({
        isVisible: true,
      });
      console.log('VisibilitySensor just fired!')
    }
  }

  render() {
    const {
      isVisible,
    } = this.state;

    const {
      image, // NOTE! Expected dimension is 1920x674, per design. Dimensional stuff hardcoded!
      header,
      subHeader,
      bgPosition, // gets default of 'center center'
    } = this.props;

    return (
      <ExtendedBox
        width={1}
        bgImage={image}
        bgRepeat="no-repeat"
        bgPosition={bgPosition}
        rbgSize="cover"
      >
        <ExtendedFlex
          height={['50vh', '60vh', '70vh']}
          maxHeight={674}
          flexDirection="column"
          justify="center"
          align="center"
          mx={[10, 20, 20, 20, 20]}
        >
          <VisibilitySensor
            callback={this.handleSensorChange}
          />
          <Heading
            type="H2"
            m={0}
            color="white"
            display="block"
            textAlign="center"
            maxWidth="100%"
            opacity={isVisible ? '1' : '0'}
            transition="opacity 0.5s 0.3s linear"
          >
            {header}
          </Heading>
          {
            subHeader &&
            <Heading
              type="H8"
              mt={[30, 40, 40, 40, 60]}
              color="white"
              display="block"
              textAlign="center"
              maxWidth="100%"
              opacity={isVisible ? '1' : '0'}
              transition="opacity 0.5s 0.6s linear"
            >
              {subHeader}
            </Heading>
          }
        </ExtendedFlex>
      </ExtendedBox>
    );
  }
}


Hero.propTypes = {
  header: PropTypes.string,
  subHeader: PropTypes.string,
  image: PropTypes.string,
  bgPosition: PropTypes.string,
};

Hero.defaultProps = {
  image: 'http://fillmurray.com/1920/674',
  bgPosition: 'center center',
};


export default Hero;
