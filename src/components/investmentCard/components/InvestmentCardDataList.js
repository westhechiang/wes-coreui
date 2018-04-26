import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import numeral from 'numeral';
import {
  Flex,
} from 'grid-styled';

import {
  ExtendedBox,
  Data,
} from '../../../';

import formatters from '../../../helpers/formatters';

const InvestmentCardDataList = ({
  propertyType,
  fundedDate,
  completedDate,
  amountInvested,
  gtkyApproved,
  investmentTypeDisplay,
  actualIrr,
}) => {
  return (
    <Flex
      flexDirection="column"
      pt={[20, 20, 40, 40, 60]}
      w={1}
    >
      {
        !gtkyApproved && investmentTypeDisplay === 'Debt' &&
        <ExtendedBox
          py={[10, 10, 15]}
          px={10}
          borderBottom={1}
          borderColor="gray.7"
        >
          <Flex
            justify="space-between"
            align="center"
          >
            <Data
              type="D2"
              color="gray.8"
              m={0}
            >
              Return Objective
            </Data>
            <Data
              type="D3"
              color="gray.8"
              m={0}
            >
              { numeral(actualIrr).format(formatters.PERCENTAGE2) }
            </Data>
          </Flex>
        </ExtendedBox>
      }
      <ExtendedBox
        borderBottom={1}
        borderColor="gray.7"
        p={10}
      >
        <Flex
          justify="space-between"
          align="center"
        >
          <Data
            type="D2"
            color="gray.8"
            m={0}
          >
            Property Type
          </Data>
          <Data
            type="D3"
            color="gray.8"
            m={0}
          >
            { propertyType }
          </Data>
        </Flex>
      </ExtendedBox>
      <ExtendedBox
        borderBottom={1}
        borderColor="gray.7"
        py={[10, 10, 15]}
        px={10}
      >
        <Flex
          justify="space-between"
          align="center"
        >
          <Data
            type="D2"
            color="gray.8"
            m={0}
          >
            Funded
          </Data>
          <Data
            type="D3"
            color="gray.8"
            m={0}
          >
            { moment(fundedDate).format(formatters.MMYYYY) }
          </Data>
        </Flex>
      </ExtendedBox>
      <ExtendedBox
        borderBottom={gtkyApproved ? 1 : 0}
        borderColor="gray.7"
        py={[10, 10, 15]}
        px={10}
      >
        <Flex
          justify="space-between"
          align="center"
        >
          <Data
            type="D2"
            color="gray.8"
            m={0}
          >
            Completed
          </Data>
          <Data
            type="D3"
            color="gray.8"
            m={0}
          >
            { moment(completedDate).format(formatters.MMYYYY) }
          </Data>
        </Flex>
      </ExtendedBox>
      {
        gtkyApproved &&
        <ExtendedBox
          py={[10, 10, 15]}
          px={10}
        >
          <Flex
            justify="space-between"
            align="center"
          >
            <Data
              type="D2"
              color="gray.8"
              m={0}
            >
              Amount Invested
            </Data>
            <Data
              type="D3"
              color="gray.8"
              m={0}
            >
              { numeral(amountInvested).format(formatters.DOLLARS) }
            </Data>
          </Flex>
        </ExtendedBox>
      }
    </Flex>
  );
};

// FIXME: Update proptypes when we know what types they are
InvestmentCardDataList.propTypes = {
  propertyType: PropTypes.string,
  fundedDate: PropTypes.string,
  completedDate: PropTypes.string,
  amountInvested: PropTypes.number,
  gtkyApproved: PropTypes.bool,
  actualIrr: PropTypes.number,
};

InvestmentCardDataList.defaultProps = {
  propertyType: 'Theme Park',
  fundedDate: '1/2/3456',
  completedDate: '1/2/3456',
  amountInvested: 15000,
  actualIrr: 0.189,
};

export default InvestmentCardDataList;
