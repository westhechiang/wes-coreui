import React from 'react';
import PropTypes from 'prop-types';
import {
  Body,
  ExtendedBox,
} from '../../../';

const ArticleCardPromo = ({
  promo,
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
        { promo }
      </Body>
    </ExtendedBox>
  );
};

ArticleCardPromo.propTypes = {
  promo: PropTypes.string,
};

ArticleCardPromo.defaultProps = {
  promo: 'Placeholder Promo Placeholder Promo Placeholder Promo Placeholder Promo Placeholder Promo Placeholder Promo Placeholder Promo',
};

export default ArticleCardPromo;
