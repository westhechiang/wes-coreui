import React from 'react';
import { storiesOf } from '@storybook/react';
import Theme from '../src/Theme';

import {
  Loader,
  LoaderContainer,
  LoaderMessage,
} from '../src';

storiesOf('LoaderContainer', module)
  .add('Default Loader', () => (
    <Loader />
  ))
  .add('Loader with size, color', () => (
    <Loader
      width={50}
      height={50}
      frontColor={Theme.colors.orange}
      backColor={Theme.colors.white}
    />
  ))
  .add('LoaderContainer', () => (
    <LoaderContainer bg="gray.0" zIndex="0">
      <Loader
        width={50}
        height={50}
        frontColor="orange"
        backColor="white"
      />
    </LoaderContainer>
  ))
  .add('LoaderContainer with message', () => (
    <LoaderContainer bg="gray.0" zIndex="0">
      <Loader>
        <LoaderMessage />
      </Loader>
    </LoaderContainer>
  ));
