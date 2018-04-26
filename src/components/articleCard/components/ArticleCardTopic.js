import React from 'react';
import PropTypes from 'prop-types';
import {
  Box,
} from 'grid-styled';

import {
  Data,
} from '../../../';

const ArticleCardTopic = ({
  topic,
}) => {
  return (
    <Box
      pt={[10, 10, 20]}
      pb={[10, 10, 10]}
      px={10}
    >
      <Data
        type="D4"
        m={0}
      >
        { topic }
      </Data>
    </Box>
  );
};

ArticleCardTopic.propTypes = {
  topic: PropTypes.string,
};

ArticleCardTopic.defaultProps = {
  topic: 'Placeholder Topic',
};

export default ArticleCardTopic;
