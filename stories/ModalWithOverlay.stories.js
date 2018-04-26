import React from 'react';
import { storiesOf } from '@storybook/react';

import {
  ModalWithOverlay,
} from '../src';

storiesOf('ModalWithOverlay', module)
  .add('ModalWithOverlay', () => (
    <ModalWithOverlay
      isVisible
    />
  ));
