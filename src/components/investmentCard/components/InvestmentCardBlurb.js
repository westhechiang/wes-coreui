import React from 'react';
import PropTypes from 'prop-types';
import {
  Body,
  ExtendedBox,
} from '../../../';

const InvestmentCardBlurb = ({
  blurb,
}) => {
  return (
    <ExtendedBox
      pt={[10, 10, 5, 5]}
      px={10}
      height={[90, 90, 110, 110, 130]}
    >
      <Body
        type="B3"
        lineHeight={1.75}
        display="block"
      >
        { blurb }
      </Body>
    </ExtendedBox>
  );
};

InvestmentCardBlurb.propTypes = {
  blurb: PropTypes.string,
};

InvestmentCardBlurb.defaultProps = {
  blurb: 'We like this well-maintained 280-unit asset since it has potential for management and operational efficiencies. Area population will grow an expected 7% in 2017.',
};

export default InvestmentCardBlurb;
