import React from 'react';
import { storiesOf } from '@storybook/react';

import {
  ArticleCard,
} from '../src';

storiesOf('ArticleCard', module)
  .add('Article Card', () => (
    <ArticleCard
      gtkyApproved
      accreditationRoleStatus="Accredited"
      statusLabel="Open for investment"
      status="status-10-open"
      propertyType="Multi-Family"
      investmentTypeDisplay="Equity"
    />
  ));
