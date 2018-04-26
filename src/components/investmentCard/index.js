import React from 'react';
import withContext from './withContext';

import {
  containerFactoryFactory,
  investmentCardImageFactoryFactory,
  investmentCardStatusFactoryFactory,
  section1FactoryFactory,
  section2FactoryFactory,
  section3FactoryFactory,
  section4FactoryFactory,
  section5FactoryFactory,
  section6FactoryFactory,
  section7FactoryFactory,
} from './factories';

class InvestmentCard extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const investmentCardImage = investmentCardImageFactoryFactory(this.props);
    const investmentCardStatus = investmentCardStatusFactoryFactory(this.props);
    const container = containerFactoryFactory(this.props);
    const section1 = section1FactoryFactory(this.props);
    const section2 = section2FactoryFactory(this.props);
    const section3 = section3FactoryFactory(this.props);
    const section4 = section4FactoryFactory(this.props);
    const section5 = section5FactoryFactory(this.props);
    const section6 = section6FactoryFactory(this.props);
    const section7 = section7FactoryFactory(this.props);

    return withContext(
      container,
      investmentCardStatus,
      investmentCardImage,
      section1,
      section2,
      section3,
      section4,
      section5,
      section6,
      section7,
    );
  }
}

export default InvestmentCard;
