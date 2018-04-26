import React from 'react';
import withContext from './withContext';

import {
  containerFactoryFactory,
  articleCardTypeFactoryFactory,
  articleCardImageFactoryFactory,
  section1FactoryFactory,
  section2FactoryFactory,
  section3FactoryFactory,
  section4FactoryFactory,
} from './factories';

class ArticleCard extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const container = containerFactoryFactory(this.props);
    const articleCardType = articleCardTypeFactoryFactory(this.props);
    const articleCardImage = articleCardImageFactoryFactory(this.props);
    const section1 = section1FactoryFactory(this.props);
    const section2 = section2FactoryFactory(this.props);
    const section3 = section3FactoryFactory(this.props);
    const section4 = section4FactoryFactory(this.props);

    return withContext(
      container,
      articleCardType,
      articleCardImage,
      section1,
      section2,
      section3,
      section4,
    );
  }
}

export default ArticleCard;
