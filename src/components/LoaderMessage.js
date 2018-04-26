import React from 'react';
import PropTypes from 'prop-types';

import {
  Body
} from '../';

const LoaderMessage = ({
  message,
}) => {
  return (
    <Body
      type="B4"
    >
      { message }
    </Body>
  );
};

LoaderMessage.propTypes = {
  message: PropTypes.string,
};

LoaderMessage.defaultProps = {
  message: 'Loading, please wait.',
};

export default LoaderMessage;
