import React from 'react';
import PropTypes from 'prop-types';

import ArticleCardImage from '../components/ArticleCardImage';

const articleCardImageFactoryFactory = (props) => {
  const {
    imageUrl,
    id,
    type,
  } = props;

  const articleCardImageFactory = () => {
    return (
      <ArticleCardImage
        imageUrl={imageUrl}
        id={id}
        type={type}
      />
    );
  };

  articleCardImageFactory.propTypes = {
    imageUrl: PropTypes.string,
    id: PropTypes.number,
    type: PropTypes.string,
  };

  return articleCardImageFactory;
};

export default articleCardImageFactoryFactory;
