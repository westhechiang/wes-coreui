import React from 'react';
import PropTypes from 'prop-types';

import InvestmentCardCalloutsX3 from '../components/InvestmentCardCalloutsX3';
import InvestmentCardActuals from '../components/InvestmentCardActuals';
import InvestmentCardEmptyPlaceholder from '../components/InvestmentCardEmptyPlaceholder';

const section4FactoryFactory = (props) => {
  const {
    minimum,
    payoutLabel,
    targetHoldMin,
    targetHoldMax,
    reit,
    propertyType,
    status,
    actualIrr,
    actualHold,
    investmentTypeDisplay,
    gtkyApproved,
    id,
    payoutTooltip,
    distribution,
    distributionMoreInfo,
    distributionTooltip,
    irrObjective,
    returnObjective,
  } = props;

  const section4Factory = () => {
    if (status === 'status-40-closed') {
      if (!gtkyApproved) {
        return (
          <InvestmentCardEmptyPlaceholder />
        );
      }

      return (
        <InvestmentCardActuals
          actualIrr={actualIrr}
          actualHold={actualHold}
          investmentTypeDisplay={investmentTypeDisplay}
        />
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
        id={id}
        payoutTooltip={payoutTooltip}
        distribution={distribution}
        distributionMoreInfo={distributionMoreInfo}
        distributionTooltip={distributionTooltip}
        irrObjective={irrObjective}
        returnObjective={returnObjective}
      />
    );
  };

  section4Factory.propTypes = {
    minimum: PropTypes.string,
    payoutLabel: PropTypes.string,
    propertyType: PropTypes.string,
    targetHoldMin: PropTypes.number,
    targetHoldMax: PropTypes.number,
    reit: PropTypes.bool,
    status: PropTypes.string,
    investmentTypeDisplay: PropTypes.string,
    distributionTooltip: PropTypes.string,
    distribution: PropTypes.number,
    distributionMoreInfo: PropTypes.string,
    payoutTooltip: PropTypes.string,
    gtkyApproved: PropTypes.bool,
  };

  return section4Factory;
};

export default section4FactoryFactory;
