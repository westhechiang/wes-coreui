import React from 'react';
import { storiesOf } from '@storybook/react';

import {
  RecentInvestmentCard,
} from '../src';

const longDescriptionIsLong = `Lorem ipsum dolor sit amet, consectetur adipiscing elit.
  Proin tincidunt lobortis efficitur. Praesent id laoreet risus. Mauris sit amet ipsum tortor.`;

storiesOf('RecentInvestmentCard', module)
  .add('RecentInvestmentCard', () => (
    <RecentInvestmentCard
      image="https://www.placecage.com/c/492/264"
      title="Property Name"
      location="City, State"
      propertyType="Totally Sweet"
      investmentType="Totally Rad"
      description={longDescriptionIsLong}
    />
  ));
