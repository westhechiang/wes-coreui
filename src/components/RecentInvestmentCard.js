// NOTE! This is fundamentally different than "InvestmentCard".
// This is intended purely for display purposes, such as on homepage.

import React from 'react';
import PropTypes from 'prop-types';

import {
  Flex,
  Body,
  Data,
  Image,
  ExtendedFlex,
} from '../';

const RecentInvestmentCard = ({
  image,
  title,
  location,
  propertyType,
  investmentType,
  description,
  opacity,
  transition,
}) => {
  return (
    <ExtendedFlex
      flexDirection="column"
      boxSizing="border-box"
      bg="white"
      width={[315, 315, 315, 400, 525]}
      height={[400, 400, 440, 480, 600]}
      justify="flex-start"
      align="center"
      p={10}
      opacity={opacity}
      transition={transition}
    >
      <Image
        width={1}
        maxWidth={492}
        IEAspectRatioFix
        src={image}
        hoverColorize
      />
      <ExtendedFlex
        flexDirection="column"
        align="flex-start"
        p={10}
        pt={20}
        maxWidth="100%"
      >
        <Body
          type="B4"
          textTransform="uppercase"
          m={0}
          mb={[0, 0, 0, 0, 0]}
        >
          {location}
        </Body>
        <Data
          type="D3"
          m={0}
          pb={20}
        >
          {title}
        </Data>
        <Flex
          align="flex-start"
          pb={30}
        >
          <ExtendedFlex
            flexDirection="column"
            borderRight="1px solid"
            pr={20}
          >
            <Data
              type="D5"
              m={0}
              mb={5}
            >
              {propertyType}
            </Data>
            <Data
              type="D3"
              m={0}
            >
              Property Type
            </Data>
          </ExtendedFlex>
          <Flex
            flexDirection="column"
            pr={0}
            pl={20}
          >
            <Data
              type="D5"
              m={0}
              mb={5}
            >
              {investmentType}
            </Data>
            <Data
              type="D3"
              m={0}
            >
              Investment Type
            </Data>
          </Flex>
        </Flex>
        <ExtendedFlex
          maxWidth="100%"
        >
          <Body
            type="B3"
            m={0}
          >
            {description}
          </Body>
        </ExtendedFlex>
      </ExtendedFlex>
    </ExtendedFlex>
  );
};

RecentInvestmentCard.defaultProps = {
  opacity: '1s',
};

RecentInvestmentCard.propTypes = {
  image: PropTypes.string,
  title: PropTypes.string,
  location: PropTypes.string,
  propertyType: PropTypes.string,
  investmentType: PropTypes.string,
  description: PropTypes.string,
  transition: PropTypes.string,
  opacity: PropTypes.string,
};

export default RecentInvestmentCard;
