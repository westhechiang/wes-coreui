import React from 'react';
import { storiesOf } from '@storybook/react';

import {
  AnimationContainer,
  InvestmentCard,
} from '../src';

storiesOf('AnimationContainer', module)
  .add('fadeInUp', () => (
    <AnimationContainer
      name="fadeInUp"
    >
      <InvestmentCard
        reit
        investmentTypeDisplay="Debt and Equity - Commercial Real Estate"
        accreditationRoleStatus="Accredited"
        gtkyApproved
        statusLabel="Open for investment"
        status="status-10-open"
        propertyType="Multi-Family"
        payoutLabel="Quarterly"
      />
    </AnimationContainer>
  ))
  .add('fadeIn', () => (
    <AnimationContainer
      name="fadeIn"
    >
      <InvestmentCard
        reit
        investmentTypeDisplay="Debt and Equity - Commercial Real Estate"
        accreditationRoleStatus="Accredited"
        gtkyApproved
        statusLabel="Open for investment"
        status="status-10-open"
        propertyType="Multi-Family"
        payoutLabel="Quarterly"
      />
    </AnimationContainer>
  ));
