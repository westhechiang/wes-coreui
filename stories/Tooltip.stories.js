import React from 'react';
import { storiesOf } from '@storybook/react';

import {
  TooltipIcon,
  Body,
  Tooltip,
  ExtendedFlex,
} from '../src';

storiesOf('Tooltip', module)
  .add('Top', () => (
    <ExtendedFlex
      w={1}
      justify="center"
      align="center"
      height="100vh"
    >
      <Tooltip
        place="top"
      >
        <Body
          type="B5"
          m={0}
          color="gray.8"
        >
          Tooltip content
        </Body>
      </Tooltip>
      <TooltipIcon />
    </ExtendedFlex>
  ))
  .add('Right', () => (
    <ExtendedFlex
      w={1}
      justify="center"
      align="center"
      height="100vh"
    >
      <Tooltip
        place="right"
      >
        <Body
          type="B5"
          m={0}
          color="gray.8"
        >
          Tooltip content
        </Body>
      </Tooltip>
      <TooltipIcon />
    </ExtendedFlex>
  ))
  .add('Bottom', () => (
    <ExtendedFlex
      w={1}
      justify="center"
      align="center"
      height="100vh"
    >
      <Tooltip
        place="bottom"
      >
        <Body
          type="B5"
          m={0}
          color="gray.8"
        >
          Tooltip content
        </Body>
      </Tooltip>
      <TooltipIcon />
    </ExtendedFlex>
  ))
  .add('Left', () => (
    <ExtendedFlex
      w={1}
      justify="center"
      align="center"
      height="100vh"
    >
      <Tooltip
        place="left"
      >
        <Body
          type="B5"
          m={0}
          color="gray.8"
        >
          Tooltip content
        </Body>
      </Tooltip>
      <TooltipIcon />
    </ExtendedFlex>
  ));
