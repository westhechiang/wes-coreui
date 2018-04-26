import React from 'react';
import PropTypes from 'prop-types';

import InvestmentCardPropertyLocation from '../components/InvestmentCardPropertyLocation';

const section2FactoryFactory = (props) => {
  const { propertyLocation } = props;

  const section2Factory = () => {
    return (
      <InvestmentCardPropertyLocation
        propertyLocation={propertyLocation}
      />
    );
  };

  section2Factory.propTypes = {
    propertyLocation: PropTypes.string,
  };

  return section2Factory;
};

export default section2FactoryFactory;
