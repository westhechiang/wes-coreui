import React from 'react';
import { storiesOf } from '@storybook/react';

import {
  InvestmentCard,
} from '../src';

storiesOf('InvestmentCard', module)
  .add('Investment Card - Accredited - Open for investment', () => (
    <InvestmentCard
      gtkyApproved
      accreditationRoleStatus="Accredited"
      statusLabel="Open for investment"
      status="status-10-open"
      propertyType="Multi-Family"
      investmentTypeDisplay="Equity"
    />
  ))
  .add('Investment Card - Accredited - Open for pledging', () => (
    <InvestmentCard
      gtkyApproved
      accreditationRoleStatus="Accredited"
      statusLabel="Open for pledging"
      status="status-15-pledge"
      propertyType="Multi-Family"
      investmentTypeDisplay="Equity"
    />
  ))
  .add('Investment Card - Accredited - 1031 Eligible', () => (
    <InvestmentCard
      eligible1031
      accreditationRoleStatus="Accredited"
      gtkyApproved
      statusLabel="Open for investment"
      status="status-10-open"
      propertyType="Multi-Family"
      investmentTypeDisplay="Equity"
    />
  ))
  .add('Investment Card - Accredited - No GTKY - Reit', () => (
    <InvestmentCard
      reit
      investmentTypeDisplay="Debt and Equity - Commercial Real Estate"
      accreditationRoleStatus="Accredited"
      gtkyApproved={false}
      statusLabel="Open for investment"
      status="status-10-open"
      propertyType="Multi-Family"
      payoutLabel="Quarterly"
    />
  ))
  .add('Investment Card - Accredited - GTKY Approved - Reit', () => (
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
  ))
  .add('Investment Card - Not Accredited - Reit', () => (
    <InvestmentCard
      reit
      investmentTypeDisplay="Debt and Equity - Commercial Real Estate"
      accreditationRoleStatus="Not Accredited"
      gtkyApproved={false}
      statusLabel="Open for investment"
      status="status-10-open"
      propertyType="Multi-Family"
      payoutLabel="Quarterly"
    />
  ))
  .add('Investment Card - Accredited - Coming Soon', () => (
    <InvestmentCard
      gtkyApproved
      accreditationRoleStatus="Accredited"
      statusLabel="Coming soon"
      status="status-20-coming-soon"
      propertyType="Multi-Family"
      investmentTypeDisplay="Equity"
      minimum={null}
      watchlist={{
        flag: 'Watch Investment',
        flagLink: '',
        unflag: 'Remove from watch list',
        unflagLink: '',
        flagged: false,
      }}
    />
  ))
  .add('Investment Card - Accredited - Completed - Equity', () => (
    <InvestmentCard
      status="status-40-closed"
      statusLabel="Completed"
      accreditationRoleStatus="Accredited"
      gtkyApproved
      propertyType="Multi-Family"
      actualIrr={0.144}
      irrObjective={0.11}
      fundedDate="2015-11-30T00:00:00-08:00"
      completedDate="2017-09-12T00:00:00-07:00"
      investmentTypeDisplay="Equity"
    />
  ))
  .add('Investment Card - Accredited - Completed - Debt', () => (
    <InvestmentCard
      status="status-40-closed"
      statusLabel="Completed"
      accreditationRoleStatus="Accredited"
      gtkyApproved
      propertyType="Multi-Family"
      actualIrr={0.144}
      returnObjective={0.05}
      fundedDate="2015-11-30T00:00:00-08:00"
      completedDate="2017-09-12T00:00:00-07:00"
      investmentTypeDisplay="Debt"
    />
  ))
  .add('Investment Card - Accredited - Funded - Equity', () => (
    <InvestmentCard
      status="status-30-active"
      statusLabel="Funded"
      accreditationRoleStatus="Accredited"
      gtkyApproved
      propertyType="Multi-Family"
      investmentTypeDisplay="Equity"
    />
  ))
  .add('Investment Card - Accredited - No GTKY - Completed - Equity', () => (
    <InvestmentCard
      status="status-40-closed"
      statusLabel="Completed"
      accreditationRoleStatus="Accredited"
      gtkyApproved={false}
      propertyType="Multi-Family"
      actualIrr={0.144}
      fundedDate="2015-11-30T00:00:00-08:00"
      completedDate="2017-09-12T00:00:00-07:00"
      investmentTypeDisplay="Equity"
    />
  ))
  .add('Investment Card - Accredited - No GTKY - Completed - Debt', () => (
    <InvestmentCard
      status="status-40-closed"
      statusLabel="Completed"
      accreditationRoleStatus="Accredited"
      gtkyApproved={false}
      propertyType="Multi-Family"
      actualIrr={0.144}
      fundedDate="2015-11-30T00:00:00-08:00"
      completedDate="2017-09-12T00:00:00-07:00"
      investmentTypeDisplay="Debt"
    />
  ))
  .add('Investment Card - Accredited - No GTKY - Funded', () => (
    <InvestmentCard
      status="status-30-active"
      statusLabel="Funded"
      accreditationRoleStatus="Accredited"
      gtkyApproved={false}
      propertyType="Multi-Family"
      actualIrr={0.144}
      fundedDate="2015-11-30T00:00:00-08:00"
      completedDate="2017-09-12T00:00:00-07:00"
      investmentTypeDisplay="Equity"
    />
  ))
  .add('Investment Card - Not Accredited - No GTKY - Completed', () => (
    <InvestmentCard
      status="status-40-closed"
      statusLabel="Completed"
      accreditationRoleStatus="Not Accredited"
      gtkyApproved={false}
      propertyType="Multi-Family"
      actualIrr={0.144}
      fundedDate="2015-11-30T00:00:00-08:00"
      completedDate="2017-09-12T00:00:00-07:00"
      investmentTypeDisplay="Equity"
    />
  ))
  .add('Investment Card - Not Accredited - No GTKY - Funded', () => (
    <InvestmentCard
      status="status-30-active"
      statusLabel="Funded"
      accreditationRoleStatus="Not Accredited"
      gtkyApproved={false}
      propertyType="Multi-Family"
      actualIrr={0.144}
      fundedDate="2015-11-30T00:00:00-08:00"
      completedDate="2017-09-12T00:00:00-07:00"
      investmentTypeDisplay="Equity"
    />
  ))
  .add('Investment Card - Accredited - No Status Label', () => (
    <InvestmentCard
      gtkyApproved
      accreditationRoleStatus="Accredited"
      statusLabel={null}
      status="status-10-open"
      propertyType="Multi-Family"
      investmentTypeDisplay="Equity"
    />
  ));
