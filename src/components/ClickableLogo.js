import React from 'react';
import PropTypes from 'prop-types';
import {
  ExtendedFlex,
  NavLink,
  Image,
} from '../';

import RMLogoBlack from '../assets/logo_stacked_black.svg';
import RMLogoWhite from '../assets/logo_stacked_white.svg';

class ClickableLogo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      logoOpacity: '1',
    };

    this.updateLogoOpacity = this.updateLogoOpacity.bind(this);
  }

  updateLogoOpacity() {
    const logoOpacity = this.state.logoOpacity === '1' ? '0.5' : '1';
    this.setState({
      logoOpacity,
    });
  }

  render() {
    const { logoColor, w, ...passedProps } = this.props;
    const { logoOpacity } = this.state;

    const bgImage = logoColor === 'white' ?
      RMLogoWhite :
      RMLogoBlack;

    return (
      <ExtendedFlex
        w={w}
        align="center"
        justify="center"
        height={70}
        display="flex"
      >
        <NavLink
          type="L5"
          minWidth={['20%', '20%', '20%']}
          maxWidth={[186, 186, 'none']}
          to="/"
          onMouseEnter={this.updateLogoOpacity}
          onMouseLeave={this.updateLogoOpacity}
          withActiveStyle={false}
        >
          <Image
            src={bgImage}
            opacity={logoOpacity}
            transition="opacity 0.2s linear"
            w={130}
            height={[50, 50, 60, 70]}
            hover
            {...passedProps}
          />
        </NavLink>
      </ExtendedFlex>
    );
  }
}

ClickableLogo.defaultProps = {
  logoColor: 'black',
  w: [1, 1, 1, 'auto'],
};

ClickableLogo.propTypes = {
  logoColor: PropTypes.string,
  w: PropTypes.array,
};

export default ClickableLogo;
