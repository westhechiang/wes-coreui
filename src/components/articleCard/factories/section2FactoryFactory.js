import React from 'react';
import PropTypes from 'prop-types';

import ArticleCardHeadline from '../components/ArticleCardHeadline';

const section2FactoryFactory = (props) => {
  const { title } = props;

  const section2Factory = () => {
    return (
      <ArticleCardHeadline
        title={title}
      />
    );
  };

  section2Factory.propTypes = {
    title: PropTypes.string,
  };

  return section2Factory;
};

export default section2FactoryFactory;
