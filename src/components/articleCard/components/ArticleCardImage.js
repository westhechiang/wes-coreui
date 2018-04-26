import React from 'react';
import PropTypes from 'prop-types';

import {
  Image,
  ExtendedBox,
  NavLink,
} from '../../../';

const ArticleCardImage = ({
  imageUrl,
  id,
  type,
}) => {
  return (
    <ExtendedBox
      w={1}
      height={[165, 165, 220, 220, 265]}
      overflowX="hidden"
      overflowY="hidden"
    >
      <NavLink
        type="L4"
        to={`/knowledge-center/${type}/${id}`}
        withActiveStyle={false}
      >
        <Image
          w={1}
          src={imageUrl}
          hoverColorize
          hover
          transition="0.2s linear filter"
        />
      </NavLink>
    </ExtendedBox>
  );
};

ArticleCardImage.propTypes = {
  imageUrl: PropTypes.string,
  id: PropTypes.number,
  type: PropTypes.string,
};

ArticleCardImage.defaultProps = {
  imageUrl: 'http://fillmurray.com/492/340',
  id: 0,
  type: 'article',
};

export default ArticleCardImage;
