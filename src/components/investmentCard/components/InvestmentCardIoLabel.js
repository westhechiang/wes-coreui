import React from 'react';
import PropTypes from 'prop-types';
import {
  Box,
} from 'grid-styled';

import {
  Data,
} from '../../../';

const InvestmentCardIoLabel = ({
  ioLabel,
}) => {
  return (
    <Box
      px={10}
      pb={10}
    >
      <Data
        type="D3"
        display="block"
        m={0}
      >
        { ioLabel }
      </Data>
    </Box>
  );
};

InvestmentCardIoLabel.propTypes = {
  ioLabel: PropTypes.string,
};

InvestmentCardIoLabel.defaultProps = {
  ioLabel: 'MogulREIT I',
};

export default InvestmentCardIoLabel;
