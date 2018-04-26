import React from 'react';
import PropTypes from 'prop-types';

import ArticleCardViewDetails from '../components/ArticleCardViewDetails';

const section4FactoryFactory = (props) => {
  const {
    pathAlias,
    type,
    id,
  } = props;

  const section4Factory = () => {
    return (
      <ArticleCardViewDetails
        pathAlias={pathAlias}
        type={type}
        id={id}
      />
    );
  };

  section4Factory.propTypes = {
    pathAlias: PropTypes.string,
  };

  return section4Factory;
};

export default section4FactoryFactory;
