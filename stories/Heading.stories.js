import React from 'react';
import { storiesOf } from '@storybook/react';

import {
  Heading,
} from '../src';
import { types } from '../src/components/Heading';

Object.keys(types).reduce((accum, type) => {
  return accum.add(type, () => (
    <Heading
      type={type}
    >
      This is a responsive {type} Heading.
    </Heading>
  ));
}, storiesOf('Heading', module));
