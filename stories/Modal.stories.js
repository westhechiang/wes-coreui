import React from 'react';
import { storiesOf } from '@storybook/react';

import {
  Modal,
} from '../src';

storiesOf('Modal', module)
  .add('Modal', () => (
    <Modal
      isVisible
    />
  ));
