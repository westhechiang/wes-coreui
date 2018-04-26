import React from 'react';
import PropTypes from 'prop-types';
import {
  Box,
  Flex,
} from 'grid-styled';

import {
  Text,
  Body,
} from '../../../';

const InvestmentCardInvestmentTypeDisplay = ({
  investmentTypeDisplay,
  eligible1031,
}) => {
  return (
    <Box
      pt={[10, 10, 20]}
      pb={[10, 10, 10]}
      px={10}
    >
      <Flex
        justify="space-between"
      >
        <Body
          type="B5"
          m={0}
        >
          { investmentTypeDisplay }
        </Body>
        {
          eligible1031 &&
          <Text
            color="blue.0"
            fontSize={[12, 12, 14, 14, 18]}
            m={0}
            textTransform="uppercase"
            fontWeight={700}
            letterSpacing="normal"
          >
            1031 Eligible
          </Text>
        }
      </Flex>
    </Box>
  );
};

InvestmentCardInvestmentTypeDisplay.propTypes = {
  investmentTypeDisplay: PropTypes.string,
  eligible1031: PropTypes.bool,
};

InvestmentCardInvestmentTypeDisplay.defaultProps = {
  investmentTypeDisplay: 'Undefined',
  eligible1031: false,
};

export default InvestmentCardInvestmentTypeDisplay;
