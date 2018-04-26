import React from 'react';
import PropTypes from 'prop-types';
import {
  Box,
} from 'grid-styled';

import {
  Body,
} from '../../../';

const InvestmentCardPropertyLocation = ({
  propertyLocation,
}) => {
  return (
    <Box
      px={10}
    >
      <Body
        type="B4"
        display="block"
        m={0}
        textTransform="uppercase"
      >
        { propertyLocation }
      </Body>
    </Box>
  );
};

InvestmentCardPropertyLocation.propTypes = {
  propertyLocation: PropTypes.string,
};

InvestmentCardPropertyLocation.defaultProps = {
  propertyLocation: 'Rancho Santa Margarita, CA',
};

export default InvestmentCardPropertyLocation;
