import React from 'react';
import PropTypes from 'prop-types';

import {
  ExtendedBox,
  Data,
} from '../../../';

const InvestmentCardStatus = ({
  statusLabel,
}) => {
  return (
    <ExtendedBox
      position="absolute"
      top="0"
      mt={[20, 20, 40]}
      w={[200, 200, 320]}
      left="5px"
      bg="gray.8"
      py={5}
      zIndex="0"
    >
      <Data
        type="D4"
        m={0}
        textAlign="center"
        w={1}
        display="block"
        color="white"
      >
        { statusLabel }
      </Data>
    </ExtendedBox>
  );
};

InvestmentCardStatus.propTypes = {
  statusLabel: PropTypes.string,
};

InvestmentCardStatus.defaultProps = {
  statusLabel: 'Active',
};

export default InvestmentCardStatus;
