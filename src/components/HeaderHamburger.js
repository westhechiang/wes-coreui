import React from 'react';
import PropTypes from 'prop-types';
import HamburgerMenu from 'react-hamburger-menu';

import { ExtendedBox } from '../';

const HeaderHamburger = (props) => {
  const {
    mobileMenuVisible,
    visibility,
    handleClick,
    ...passedProps
  } = props;

  return (
    <ExtendedBox
      w={20}
      height={20}
      display={mobileMenuVisible ? 'block' : 'hidden'}
      visibility={visibility}
      position={mobileMenuVisible ? 'fixed' : 'absolute'}
      top={25}
      left={25}
      zIndex="9999"
      transition="visibility 0s linear"
      {...passedProps}
    >
      <HamburgerMenu
        isOpen={mobileMenuVisible}
        menuClicked={handleClick}
        width={20}
        animationDuration={0.6}
        height={20}
        color={mobileMenuVisible ? 'white' : '#414042'}
      />
    </ExtendedBox>
  );
};

HeaderHamburger.propTypes = {
  mobileMenuVisible: PropTypes.bool,
  handleClick: PropTypes.func,
  visibility: PropTypes.string,
};

HeaderHamburger.defaultProps = {
  visibility: 'visible',
};

export default HeaderHamburger;
