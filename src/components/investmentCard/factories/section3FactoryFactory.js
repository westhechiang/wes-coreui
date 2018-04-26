import React from 'react';
import PropTypes from 'prop-types';

import InvestmentCardIoLabel from '../components/InvestmentCardIoLabel';

const section3FactoryFactory = (props) => {
  const { ioLabel } = props;

  const section3Factory = () => {
    return (
      <InvestmentCardIoLabel
        ioLabel={ioLabel}
      />
    );
  };

  section3Factory.propTypes = {
    ioLabel: PropTypes.string,
  };

  return section3Factory;
};

export default section3FactoryFactory;
