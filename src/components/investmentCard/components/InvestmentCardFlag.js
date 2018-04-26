import React from 'react';
import PropTypes from 'prop-types';

import {
  ExtendedBox,
  Link,
  LoaderContainer,
  Loader,
} from '../../../';

const InvestmentCardFlag = ({
  text,
  handleClick,
  loading,
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
        {
          // Disable the click handler while it's loading.
          ...(loading ? {} : {
            onClick: handleClick,
          })
        }
      >
        { text } &gt;
      </Link>
      {
        loading &&
        <ExtendedBox
          position="relative"
          display="inline"
          pl={[50]}
        >
          <LoaderContainer>
            <Loader
              width={12}
              height={12}
            />
          </LoaderContainer>
        </ExtendedBox>
      }
    </ExtendedBox>
  );
};

InvestmentCardFlag.propTypes = {
  text: PropTypes.string,
  handleClick: PropTypes.func,
  loading: PropTypes.bool,
};

InvestmentCardFlag.defaultProps = {
  text: 'Watch Investment',
  loading: false,
};

export default InvestmentCardFlag;
