import React from 'react';
import PropTypes from 'prop-types';

import ArticleCardContainer from '../components/ArticleCardContainer';

const containerFactoryFactory = (
  props,
) => {
  const {
    fadeIn,
    fadeIndex,
    zIndex,
    id,
    noAnimate,
  } = props;

  const containerFactory = ({
    children,
  }) => {
    return (
      <ArticleCardContainer
        height={[500, 500, 600, 600, 680]}
        fadeIn={fadeIn}
        fadeIndex={fadeIndex}
        zIndex={zIndex}
        id={id}
        noAnimate={noAnimate}
      >
        { children }
      </ArticleCardContainer>
    );
  };

  containerFactory.propTypes = {
    children: PropTypes.any,
  };

  return containerFactory;
};

export default containerFactoryFactory;
