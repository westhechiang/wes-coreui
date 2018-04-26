import React from 'react';
import PropTypes from 'prop-types';
import {
  ExtendedBox,
} from '../';

const Overlay = ({
  isVisible,
  handleClick,
}) => {
  return (
    <ExtendedBox
      w={1}
      height="100%"
      position="fixed"
      left="0"
      top="0"
      opacity={isVisible ? '0.8' : '0'}
      visibility={isVisible ? 'visible' : 'hidden'}
      transition="opacity 0.3s linear"
      zIndex="1"
      bg="black"
      onClick={handleClick}
      hover
    />
  );
};

Overlay.propTypes = {
  isVisible: PropTypes.bool,
  handleClick: PropTypes.func,
};

export default Overlay;
