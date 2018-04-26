import React from 'react';
import PropTypes from 'prop-types';

import ArticleCardType from '../components/ArticleCardType';

const articleCardTypeFactoryFactory = (props) => {
  const {
    type,
  } = props;

  const articleCardTypeFactory = () => {
    return (
      <ArticleCardType
        type={type}
      />
    );
  };

  articleCardTypeFactory.propTypes = {
    type: PropTypes.string,
  };

  return articleCardTypeFactory;
};

export default articleCardTypeFactoryFactory;
