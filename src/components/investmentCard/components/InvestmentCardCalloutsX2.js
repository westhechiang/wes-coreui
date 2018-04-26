import React from 'react';
import PropTypes from 'prop-types';
import numeral from 'numeral';

import {
  Box,
  Flex,
} from 'grid-styled';

import {
  ExtendedBox,
  ExtendedFlex,
  Data,
  Image,
} from '../../../';

import pc60 from '../../../assets/pie_chart_60.png';
import pc65 from '../../../assets/pie_chart_65.png';
import pc70 from '../../../assets/pie_chart_70.png';
import pc75 from '../../../assets/pie_chart_75.png';
import pc80 from '../../../assets/pie_chart_80.png';
import pc85 from '../../../assets/pie_chart_85.png';
import pc90 from '../../../assets/pie_chart_90.png';
import pc95 from '../../../assets/pie_chart_95.png';
import pc100 from '../../../assets/pie_chart_100.png';

import formatters from '../../../helpers/formatters';
import { round5 } from '../../../helpers/math';

const images = {
  pc60,
  pc65,
  pc70,
  pc75,
  pc80,
  pc85,
  pc90,
  pc95,
  pc100,
};

const getImage = (percentage) => {
  const int = percentage * 100;
  let image;
  if (int < 98) {
    const roundedPercentage = round5(int);
    image = images[`pc${roundedPercentage}`] || null;
  } else if (int >= 98 && int < 100) {
    image = images.pc95;
  } else {
    image = images.pc100;
  }
  return image;
};

const InvestmentCardCalloutsX2 = ({
  progressBar,
}) => {
  return (
    <Box
      pt={20}
      px={10}
    >
      <Flex
        justify="space-between"
        w={1}
      >
        <ExtendedBox
          w={1}
          borderRight={1}
          borderColor="gray.7"
          px={10}
        >
          <ExtendedFlex
            justify="center"
            align="center"
            flexDirection="column"
            height="100%"
            position="relative"
          >
            <Image
              position="absolute"
              zIndex="0"
              left="0"
              right="0"
              top="0"
              bottom="0"
              m="auto"
              src={getImage(progressBar.percent)}
              w={[80, 80, 90, 110, 140]}
            />
            <Data
              type="D6"
              m={0}
              display="block"
              zIndex="1"
            >
              { numeral(progressBar.percent).format(formatters.PERCENTAGE) }
            </Data>
            <Data
              type="D3"
              m={0}
              display="block"
              zIndex="1"
            >
              Invested
            </Data>
          </ExtendedFlex>
        </ExtendedBox>
        <ExtendedBox
          w={1}
          px={20}
          boxSizing="border-box"
        >
          <Data
            display="block"
            type="D6"
            m={0}
          >
            { numeral(progressBar.target).format(formatters.DOLLARS) }
          </Data>
          <Data
            display="block"
            m={0}
            type="D3"
          >
            Investment Goal
          </Data>
        </ExtendedBox>
      </Flex>
    </Box>
  );
};

InvestmentCardCalloutsX2.propTypes = {
  progressBar: PropTypes.object,
};

InvestmentCardCalloutsX2.defaultProps = {
  progressBar: {
    target: 810000,
    raised: 710000,
    percent: 0.87,
  },
};

export default InvestmentCardCalloutsX2;
