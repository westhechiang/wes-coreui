import React from 'react';
import { storiesOf } from '@storybook/react';

import {
  Search,
} from '../src';

storiesOf('Search', module)
  .add('Search', () => (
    <Search
      placeholder="Placeholder"
    />
  ));
