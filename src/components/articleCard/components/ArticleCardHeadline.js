import React from 'react';
import PropTypes from 'prop-types';
import {
  Box,
} from 'grid-styled';

import {
  Heading,
} from '../../../';

const ArticleCardHeadline = ({
  title,
}) => {
  return (
    <Box
      px={10}
    >
      <Heading
        type="H6"
        display="block"
        m={0}
      >
        { title }
      </Heading>
    </Box>
  );
};

ArticleCardHeadline.propTypes = {
  title: PropTypes.string,
};

ArticleCardHeadline.defaultProps = {
  title: 'Placeholder Title Placeholder Title Placeholder Title Placeholder Title Placeholder Title ',
};

export default ArticleCardHeadline;
