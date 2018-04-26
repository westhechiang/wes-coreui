import React from 'react';
import { storiesOf } from '@storybook/react';

import {
  Data,
} from '../src';
import { types } from '../src/components/Data';

Object.keys(types).reduce((accum, type) => {
  return accum.add(type, () => (
    <Data
      type={type}
    >
      This is a responsive {type} Data.
    </Data>
  ));
}, storiesOf('Data', module));
