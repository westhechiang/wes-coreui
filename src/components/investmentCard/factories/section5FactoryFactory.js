import React from 'react';
import PropTypes from 'prop-types';

import InvestmentCardBlurb from '../components/InvestmentCardBlurb';
import InvestmentCardCalloutsX3 from '../components/InvestmentCardCalloutsX3';
import InvestmentCardEmptyPlaceholder from '../components/InvestmentCardEmptyPlaceholder';

const section5FactoryFactory = (props) => {
  const {
    blurb,
    accreditationRoleStatus,
    status,
    minimum,
    payoutLabel,
    targetHoldMin,
    targetHoldMax,
    reit,
    propertyType,
    investmentTypeDisplay,
    gtkyApproved,
    returnObjective,
    irrObjective,
  } = props;

  const section5Factory = () => {
    if (status === 'status-30-active') {
      return (
        <InvestmentCardEmptyPlaceholder />
      );
    }

    if (status === 'status-40-closed') {
      if (!gtkyApproved) {
        return (
          <InvestmentCardEmptyPlaceholder />
        );
      }
      return (
        <InvestmentCardCalloutsX3
          gtkyApproved={gtkyApproved}
          investmentTypeDisplay={investmentTypeDisplay}
          minimum={minimum}
          payoutLabel={payoutLabel}
          propertyType={propertyType}
          targetHoldMin={targetHoldMin}
          targetHoldMax={targetHoldMax}
          reit={reit}
          status={status}
          returnObjective={returnObjective}
          irrObjective={irrObjective}
        />
      );
    }
    return (
      <InvestmentCardBlurb
        blurb={blurb}
      />
    );
  };

  section5Factory.propTypes = {
    blurb: PropTypes.string,
    status: PropTypes.string,
  };

  return section5Factory;
};

export default section5FactoryFactory;
