import React from 'react';
import PropTypes from 'prop-types';

import InvestmentCardStatus from '../components/InvestmentCardStatus';

const investmentCardStatusFactoryFactory = (props) => {
  const {
    statusLabel,
  } = props;

  const investmentCardStatusFactory = () => {
    let factoryResult = null; // Init result to `null`, no status label at all.

    // If a statusLabel has been passed (anything other than `null` for its prop), make it.
    if (statusLabel !== null) {
      factoryResult = (
        <InvestmentCardStatus
          statusLabel={statusLabel}
        />
      );
    }
    return factoryResult;
  };

  investmentCardStatusFactory.propTypes = {
    statusLabel: PropTypes.string,
  };

  return investmentCardStatusFactory;
};

export default investmentCardStatusFactoryFactory;
