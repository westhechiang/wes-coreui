import React from 'react';
import PropTypes from 'prop-types';
import numeral from 'numeral';
import {
  Box,
  Flex,
} from 'grid-styled';

import {
  Data,
} from '../../../';

import formatters from '../../../helpers/formatters';

const InvestmentCardActuals = ({
  actualIrr,
  actualHold,
  investmentTypeDisplay,
}) => {
  return (
    <Box
      pt={20}
      px={10}
    >
      <Flex
        w={1}
        justify="flex-start"
      >
        <Box
          py={10}
          w={1}
        >
          <Data
            type="D6"
            display="block"
            m={0}
          >
            { numeral(actualIrr).format(formatters.PERCENTAGE2) }
          </Data>
          <Data
            pt={5}
            type="D3"
            display="block"
            m={0}
          >
            { investmentTypeDisplay === 'Debt' ? 'Actual Return' : 'Actual IRR' }
          </Data>
        </Box>
        <Box
          py={10}
          w={1}
        >
          <Data
            type="D6"
            display="block"
            m={0}
          >
            { `${actualHold} MOS` }
          </Data>
          <Data
            pt={5}
            type="D3"
            display="block"
            m={0}
          >
            Actual Hold
          </Data>
        </Box>
        <Box w={1} />
      </Flex>
    </Box>
  );
};

InvestmentCardActuals.propTypes = {
  actualIrr: PropTypes.number,
  actualHold: PropTypes.number,
  investmentTypeDisplay: PropTypes.string,
};

InvestmentCardActuals.defaultProps = {
  actualIrr: 0.999,
  actualHold: '123',
  investmentTypeDisplay: 'Equity',
};

export default InvestmentCardActuals;
