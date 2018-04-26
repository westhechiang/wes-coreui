import React from 'react';
import PropTypes from 'prop-types';

import { ExtendedBox } from '../../../';

const InvestmentCardEmptyPlaceholder = ({
  height,
}) => {
  return (
    <ExtendedBox height={height} />
  );
};

InvestmentCardEmptyPlaceholder.propTypes = {
  height: PropTypes.string,
};

InvestmentCardEmptyPlaceholder.defaultProps = {
  height: '0px',
};

export default InvestmentCardEmptyPlaceholder;
