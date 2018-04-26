// FIXME: This is where we would implement clickable
// investment card image
import React from 'react';
import PropTypes from 'prop-types';

import InvestmentCardImage from '../components/InvestmentCardImage';

const investmentCardImageFactoryFactory = (props) => {
  const {
    imageUrl,
    pathAlias,
    status,
  } = props;

  const hasLink = !(status === 'status-20-coming-soon' ||
    status === 'status-40-closed');

  const imageProps = {
      imageUrl,
      ImageWrapper: hasLink ? 'a' : React.Fragment,
      imageWrapperProps: hasLink ? {
        href: pathAlias,
      } : {},
      hover: hasLink,
    };

  const investmentCardImageFactory = () => {
    return (
      <InvestmentCardImage
        {...imageProps}
      />
    );
  };

  return investmentCardImageFactory;
};

export default investmentCardImageFactoryFactory;
