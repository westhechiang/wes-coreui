import React from 'react';
import PropTypes from 'prop-types';

import InvestmentCardContainer from '../components/InvestmentCardContainer';

const containerFactoryFactory = (
  props,
) => {
  const {
    gtkyApproved,
    status,
    fadeIn,
    fadeIndex,
    zIndex,
    id,
    reit,
    payoutTooltip,
    distributionTooltip,
    investmentTypeDisplay,
    noAnimate,
  } = props;

  const containerFactory = ({
    children,
    heights,
  }) => {
    // Use a shorter card for completed / funded IOs. Switch between the shorter
    // types when the user is not GTKY approved.
    const heightKey = (status === 'status-30-active' || (status === 'status-40-closed' && !gtkyApproved)) ?
      (investmentTypeDisplay === 'Debt' && !gtkyApproved ? 'mid' : 'short') :
      'tall';
    const height = heights[heightKey];

    return (
      <InvestmentCardContainer
        height={height}
        fadeIn={fadeIn}
        fadeIndex={fadeIndex}
        reit={reit}
        zIndex={zIndex}
        id={id}
        payoutTooltip={payoutTooltip}
        distributionTooltip={distributionTooltip}
        noAnimate={noAnimate}
      >
        { children }
      </InvestmentCardContainer>
    );
  };

  containerFactory.propTypes = {
    children: PropTypes.any,
    heights: PropTypes.shape({
      short: PropTypes.oneOfType([
        PropTypes.number,
        PropTypes.array,
      ]),
      mid: PropTypes.oneOfType([
        PropTypes.number,
        PropTypes.array,
      ]),
      tall: PropTypes.oneOfType([
        PropTypes.number,
        PropTypes.array,
      ]),
    }),
  };

  containerFactory.defaultProps = {
    heights: {
      short: [375, 375, 500, 500, 610],
      mid: [405, 405, 550, 550, 660],
      tall: [550, 550, 700, 700, 780],
    },
  };

  return containerFactory;
};

export default containerFactoryFactory;
