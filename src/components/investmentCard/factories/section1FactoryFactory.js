import React from 'react';
import PropTypes from 'prop-types';

import InvestmentCardInvestmentTypeDisplay from '../components/InvestmentCardInvestmentTypeDisplay';

const section1FactoryFactory = (props) => {
  const {
    investmentTypeDisplay,
    eligible1031,
  } = props;

  const section1Factory = () => {
    return (
      <InvestmentCardInvestmentTypeDisplay
        investmentTypeDisplay={investmentTypeDisplay}
        eligible1031={eligible1031}
      />
    );
  };

  section1Factory.propTypes = {
    investmentTypeDisplay: PropTypes.string,
    eligible1031: PropTypes.bool,
  };

  return section1Factory;
};

export default section1FactoryFactory;
