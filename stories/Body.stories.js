import React from 'react';
import { storiesOf } from '@storybook/react';
import { types } from '../src/components/Body';

import {
  Body,
} from '../src';

Object.keys(types).reduce((accum, type) => {
  return accum.add(type, () => (
    <Body
      type={type}
    >
      This is a responsive {type} Body.
    </Body>
  ));
}, storiesOf('Body', module));
