import React from 'react';
import PropTypes from 'prop-types';

import InvestmentCardEmptyPlaceholder from '../components/InvestmentCardEmptyPlaceholder';
import InvestmentCardCalloutsX2 from '../components/InvestmentCardCalloutsX2';
import InvestmentCardDataList from '../components/InvestmentCardDataList';

const section6FactoryFactory = (props) => {
  const section6Factory = () => {
    const {
      reit,
      investmentGoal,
      status,
      propertyType,
      fundedDate,
      completedDate,
      amountInvested,
      accreditationRoleStatus,
      progressBar,
      gtkyApproved,
      investmentTypeDisplay,
      actualIrr,
    } = props;

    if (reit ||
        status === 'status-20-coming-soon' ||
        (accreditationRoleStatus === 'Accredited' &&
          status === 'status-30-active') ||
          status === 'status-15-pledge' ||
          (!gtkyApproved &&
          status === 'status-30-active')) {
      return (
        <InvestmentCardEmptyPlaceholder />
      );
    }

    if (status === 'status-40-closed') {
      return (
        <InvestmentCardDataList
          propertyType={propertyType}
          fundedDate={fundedDate}
          completedDate={completedDate}
          amountInvested={amountInvested}
          gtkyApproved={gtkyApproved}
          investmentTypeDisplay={investmentTypeDisplay}
          actualIrr={actualIrr}
        />
      );
    }
    return (
      <InvestmentCardCalloutsX2
        investmentGoal={investmentGoal}
        progressBar={progressBar}
      />
    );
  };

  section6Factory.propTypes = {
    reit: PropTypes.bool,
    investmentGoal: PropTypes.string,
    status: PropTypes.string,
    propertyType: PropTypes.string,
    fundedDate: PropTypes.string,
    completedDate: PropTypes.string,
    amountInvested: PropTypes.string,
    accreditationRoleStatus: PropTypes.string,
    progressBar: PropTypes.object,
    gtkyApproved: PropTypes.bool,
    actualIrr: PropTypes.number,
  };

  return section6Factory;
};

export default section6FactoryFactory;
