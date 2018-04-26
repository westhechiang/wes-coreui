import React from 'react';
import PropTypes from 'prop-types';

import ArticleCardPromo from '../components/ArticleCardPromo';

const section3FactoryFactory = (props) => {
  const {
    promo,
  } = props;

  const section3Factory = () => {
    return (
      <ArticleCardPromo
        promo={promo}
      />
    );
  };

  section3Factory.propTypes = {
    promo: PropTypes.string,
  };

  return section3Factory;
};

export default section3FactoryFactory;
