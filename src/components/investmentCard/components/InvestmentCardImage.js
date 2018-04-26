import React from 'react';
import PropTypes from 'prop-types';

import {
  Image,
  ExtendedBox,
} from '../../../';

const InvestmentCardImage = ({
  imageUrl,
  hover,
  ImageWrapper,
  imageWrapperProps,
}) => {
  return (
    <ExtendedBox
      w={1}
      height={[165, 165, 220, 220, 265]}
      overflowX="hidden"
      overflowY="hidden"
    >
      <ImageWrapper
        {...imageWrapperProps}
      >
        <Image
          w={1}
          src={imageUrl}
          hoverColorize
          hover={hover}
          transition="0.2s linear filter"
        />
      </ImageWrapper>
    </ExtendedBox>
  );
};

InvestmentCardImage.propTypes = {
  imageUrl: PropTypes.string,
  hover: PropTypes.bool,
  ImageWrapper: PropTypes.node,
  imageWrapperProps: PropTypes.object,
};

InvestmentCardImage.defaultProps = {
  imageUrl: 'http://fillmurray.com/492/340',
  hover: false,
  ImageWrapper: PropTypes.instanceOf(React.Fragment),
  imageWrapperProps: {},
};

export default InvestmentCardImage;
