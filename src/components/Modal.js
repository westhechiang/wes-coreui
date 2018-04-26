import React from 'react';
import PropTypes from 'prop-types';

import {
  ExtendedBox,
  Image,
} from '../';

import image from '../assets/closeX_blk.svg';

const Modal = ({
  isVisible,
  handleClick,
  children,
}) => {
  return (
    <ExtendedBox
      w={[0.9, 600]}
      minHeight={140}
      position="fixed"
      top="50%"
      left="50%"
      transform="translate(-50%, -50%)"
      bg="white"
      p={40}
      boxSizing="border-box"
      opacity={isVisible ? '1' : '0'}
      transition={`
        opacity 0.5s linear,
        visibility 0.5s linear
      `}
      zIndex="2"
      visibility={isVisible ? 'visible' : 'hidden'}
    >
      <ExtendedBox
        position="absolute"
        top="10px"
        right="10px"
        visibility={isVisible ? 'visible' : 'hidden'}
      >
        <Image
          src={image}
          onClick={handleClick}
          visibility={isVisible ? 'visible' : 'hidden'}
          hover
        />
      </ExtendedBox>
      {children}
    </ExtendedBox>
  );
};

Modal.propTypes = {
  children: PropTypes.any,
  isVisible: PropTypes.bool,
  handleClick: PropTypes.func,
};

Modal.defaultProps = {
  children: 'Blah Blah modal content',
};

export default Modal;
