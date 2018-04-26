import React from 'react';
import PropTypes from 'prop-types';

import ArticleCardTopic from '../components/ArticleCardTopic';

const section1FactoryFactory = (props) => {
  const {
    topic,
  } = props;

  const section1Factory = () => {
    return (
      <ArticleCardTopic
        topic={topic}
      />
    );
  };

  section1Factory.propTypes = {
    topic: PropTypes.string,
  };

  return section1Factory;
};

export default section1FactoryFactory;
