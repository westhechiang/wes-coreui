import React from 'react';
import PropTypes from 'prop-types';

import {
  ExtendedBox,
  Data,
} from '../../../';

const ArticleCardType = ({
  type,
}) => {
  return (
    <ExtendedBox
      w={1}
      mb={10}
    >
      <Data
        color="black"
        type="D4"
        m={0}
      >
        {type}
      </Data>
    </ExtendedBox>
  );
};

ArticleCardType.propTypes = {
  type: PropTypes.string,
};

ArticleCardType.defaultProps = {
  type: 'Placeholder Type',
};

export default ArticleCardType;
