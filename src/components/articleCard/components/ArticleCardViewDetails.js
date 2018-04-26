import React from 'react';
import PropTypes from 'prop-types';

import {
  ExtendedBox,
  NavLink,
} from '../../../';

const ArticleCardViewDetails = ({
  pathAlias,
  type,
  id,
}) => {
  return (
    <ExtendedBox
      pt={20}
      px={10}
      position="absolute"
      bottom="20px"
    >
      <NavLink
        type="L4"
        href={pathAlias}
        to={`/knowledge-center/${type}/${id}`}
      >
        View Details &gt;
      </NavLink>
    </ExtendedBox>
  );
};

ArticleCardViewDetails.propTypes = {
  pathAlias: PropTypes.string,
  id: PropTypes.number,
  type: PropTypes.string,
};

ArticleCardViewDetails.defaultProps = {
  pathAlias: '/',
};

export default ArticleCardViewDetails;
