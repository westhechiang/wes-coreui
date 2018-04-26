import React from 'react';
import PropTypes from 'prop-types';

import {
  Modal,
  Overlay,
  ExtendedBox,
} from '../';

const ModalWithOverlay = ({
  isVisible,
  handleClick,
  children,
}) => {
  return (
    <ExtendedBox
      w={1}
      height="100%"
      position="fixed"
      left="0"
      top="0"
      visibility={isVisible ? 'visible' : 'hidden'}
      zIndex="2"
    >
      <Overlay
        isVisible={isVisible}
        handleClick={handleClick}
      />
      <Modal
        isVisible={isVisible}
        handleClick={handleClick}
      >
        {children}
      </Modal>
    </ExtendedBox>
  );
};

ModalWithOverlay.propTypes = {
  children: PropTypes.any,
  isVisible: PropTypes.bool,
  handleClick: PropTypes.func,
};

export default ModalWithOverlay;
