import React from 'react';
import { storiesOf } from '@storybook/react';

import {
  Callout,
} from '../src';

storiesOf('Callout', module)
  .add('Default', () => (
    <Callout
      header="Header"
      subHeader="subHeader subHeader subHeader subHeader subHeader "
      linkText="More Details >"
      bg="white"
    />
  ));
