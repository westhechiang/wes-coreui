import React from 'react';
import PropTypes from 'prop-types';

import InvestmentCardViewDetails from '../components/InvestmentCardViewDetails';
import InvestmentCardFlag from '../components/InvestmentCardFlag';
import InvestmentCardEmptyPlaceholder from '../components/InvestmentCardEmptyPlaceholder';

const section7FactoryFactory = (props) => {
  const { pathAlias, status, gtkyApproved, watchlist } = props;

  const section7Factory = () => {
    if (status === 'status-40-closed' || (status === 'status-30-active' && !gtkyApproved)) {
      return (
        <InvestmentCardEmptyPlaceholder />
      );
    }
    if (status === 'status-20-coming-soon') {
      return (
        <InvestmentCardFlag
          text={watchlist.text}
          handleClick={watchlist.handleClick}
          loading={watchlist.loading}
        />
      );
    }
    return (
      <InvestmentCardViewDetails
        pathAlias={pathAlias}
      />
    );
  };

  section7Factory.propTypes = {
    pathAlias: PropTypes.string,
  };

  return section7Factory;
};

export default section7FactoryFactory;
