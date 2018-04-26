import React from 'react';
import { configure, addDecorator } from '@storybook/react';
import backgroundColor from 'react-storybook-decorator-background';
import Theme from '../src/Theme';
import { ThemeProvider } from 'styled-components';

// automatically import all files ending in *.stories.js
const req = require.context('../stories', true, /.stories.js$/);

addDecorator((story) => (
  <ThemeProvider theme={Theme}>
    {story()}
  </ThemeProvider>
));

addDecorator(backgroundColor([
  '#808285',
  '#ffffff',
  '#000000',
  '#4B89DC',
]));

function loadStories() {
  req.keys().forEach((filename) => req(filename));
}

configure(loadStories, module);
