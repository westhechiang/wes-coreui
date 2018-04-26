import React from 'react';
import PropTypes from 'prop-types';
import numeral from 'numeral';
import {
  Box,
  Flex,
} from 'grid-styled';

import {
  ExtendedBox,
  Data,
  TooltipIcon,
} from '../../../';

import formatters from '../../../helpers/formatters';

import InvestmentTargetHold from './InvestmentTargetHold';

const calloutPosition1Generator = (props) => {
  const {
    status,
    investmentTypeDisplay,
    minimum,
    irrObjective,
    returnObjective,
  } = props;

  if (status === 'status-20-coming-soon') {
    return {
      label: 'Minimum',
      value: minimum ? numeral(minimum).format(formatters.SHORTENED_DOLLARS) : 'TBD',
    };
  } else if (status === 'status-30-active' ||
      status === 'status-40-closed') {
    if (['Equity', 'Preferred Equity'].includes(investmentTypeDisplay)) {
      return {
        label: 'IRR Objective',
        value: numeral(irrObjective).format(formatters.PERCENTAGE2),
      };
    }
    if (investmentTypeDisplay === 'Debt') {
      return {
        label: 'Return Objective',
        value: numeral(returnObjective).format(formatters.PERCENTAGE2),
      };
    }
  }
  return {
    label: 'Minimum',
    value: numeral(minimum).format(formatters.SHORTENED_DOLLARS),
  };
};

const PropertyTypeData = ({
  distribution,
  distributionMoreInfo,
  propertyType,
  reit,
  distributionTooltip,
  id,
}) => {
  return (
    <React.Fragment>
      <Data
        type="D5"
        display="block"
        m={0}
      >
        {
          reit ? (
            (distribution === null) ?
              distributionMoreInfo :
              numeral(distribution).format(formatters.PERCENTAGE)
          ) : propertyType
        }
      </Data>
      {
        reit && distributionTooltip &&
        <TooltipIcon
          tooltipId={`${id}_3x_position_3`}
          ml={[2, 2, 5]}
        />
      }
    </React.Fragment>
  )
};

const PropertyTypeLabel = ({
  reit,
}) => {
  return (
    <React.Fragment>
      { reit ? 'Distribution' : 'Property Type' }
    </React.Fragment>
  )
}

const InvestmentCardCalloutsX3 = (props) => {
  const {
    gtkyApproved,
    minimum,
    status,
    targetHoldMin,
    targetHoldMax,
    investmentTypeDisplay,
    reit,
    propertyType,
    distribution,
    distributionMoreInfo,
    payoutLabel,
    id,
    payoutTooltip,
    distributionTooltip,
  } = props;

  const limitedActiveCallout = status === 'status-30-active' && !gtkyApproved;

  return (
    <Box
      pt={10}
      px={10}
    >
      <Flex
        w={1}
      >
          <ExtendedBox
            borderRight={1}
            borderColor="gray.7"
            py={10}
            w={1}
          >
            {
              !limitedActiveCallout &&
              <Data
                type="D5"
                display="block"
                m={0}
                textTransform="uppercase"
              >
              {
                calloutPosition1Generator(props).value
              }
              </Data>
            }
            {
              limitedActiveCallout &&
              <PropertyTypeData
                reit={reit}
                distribution={distribution}
                distributionMoreInfo={distributionMoreInfo}
                propertyType={propertyType}
                distributionTooltip={distributionTooltip}
                id={id}
              />
            }
            <Data
              pt={5}
              type="D3"
              display="block"
              m={0}
            >
              {
                !limitedActiveCallout &&
                calloutPosition1Generator(props).label
              }
              {
                limitedActiveCallout &&
                <PropertyTypeLabel
                  reit={reit}
                />
              }
            </Data>
          </ExtendedBox>
          <ExtendedBox
            borderRight={limitedActiveCallout ? 0 : 1}
            borderColor="gray.7"
            py={10}
            pl={[10, 10, 20, 20, 20]}
            w={[0.8, 0.8, 1, 1, 1]}
            position="relative"
          >
            <Flex
              align="flex-end"
            >
              <Data
                type="D5"
                m={0}
              >
                { reit ?
                  payoutLabel :
                  <InvestmentTargetHold min={targetHoldMin} max={targetHoldMax} />
                }
              </Data>
              {
                reit && payoutTooltip &&
                <TooltipIcon
                  tooltipId={`${id}_3x_position_2`}
                  ml={[2, 2, 5]}
                />
              }
            </Flex>
            <Data
              pt={5}
              type="D3"
              display="block"
              m={0}
            >
              { reit ? 'Payout' : 'Target Hold' }
            </Data>
          </ExtendedBox>
          <ExtendedBox
            w={[0.9, 0.9, 1, 1, 1]}
            py={10}
            pl={[10, 10, 20, 20, 20]}
          >
            <Flex
              align="flex-end"
            >
            {
              !limitedActiveCallout &&
              <PropertyTypeData
                reit={reit}
                distribution={distribution}
                distributionMoreInfo={distributionMoreInfo}
                propertyType={propertyType}
                distributionTooltip={distributionTooltip}
                id={id}
              />
            }
            </Flex>
            <Data
              pt={5}
              type="D3"
              display="block"
              m={0}
            >
            {
              !limitedActiveCallout &&
              <PropertyTypeLabel
                reit={reit}
              />
            }
            </Data>
          </ExtendedBox>
      </Flex>
    </Box>
  );
};

InvestmentCardCalloutsX3.propTypes = {
  minimum: PropTypes.number,
  propertyType: PropTypes.string,
  targetHoldMin: PropTypes.number,
  targetHoldMax: PropTypes.number,
  reit: PropTypes.bool,
  payoutLabel: PropTypes.string,
  distribution: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string,
  ]),
  distributionMoreInfo: PropTypes.string,
  status: PropTypes.string,
  investmentTypeDisplay: PropTypes.string,
  id: PropTypes.number,
  distributionTooltip: PropTypes.string,
  payoutTooltip: PropTypes.string,
  gtkyApproved: PropTypes.bool,
  actualIrr: PropTypes.number,
  irrObjective: PropTypes.number,
  returnObjective: PropTypes.number,
};

InvestmentCardCalloutsX3.defaultProps = {
  propertyType: 'Placeholder',
  minimum: 10000,
  payoutLabel: 'Monthly',
  reit: false,
  targetHoldMin: 36,
  targetHoldMax: 60,
  distribution: 0.99,
  distributionMoreInfo: 'More Info',
  distributionTooltip: 'Placeholder distribution Tooltip',
  payoutTooltip: 'Placeholder payout Tooltip',
  gtkyApproved: true,
  irrObjective: 0.12,
  returnObjective: 0.09,
};

export default InvestmentCardCalloutsX3;
