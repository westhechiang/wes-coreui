import React from 'react';
import PropTypes from 'prop-types';

import {
  ExtendedBox,
  Link,
} from '../../../';

const InvestmentCardViewDetails = ({
  pathAlias,
}) => {
  return (
    <ExtendedBox
      pt={20}
      px={10}
      position="absolute"
      bottom="20px"
    >
      <Link
        type="L4"
        href={pathAlias}
      >
        View Details &gt;
      </Link>
    </ExtendedBox>
  );
};

InvestmentCardViewDetails.propTypes = {
  pathAlias: PropTypes.string,
};

InvestmentCardViewDetails.defaultProps = {
  pathAlias: '/investment-opportunity/193744',
};

export default InvestmentCardViewDetails;
