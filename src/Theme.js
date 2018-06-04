import { injectGlobal } from 'styled-components';
import styledNormalize from 'styled-normalize';

// global css; only add to this if there are no other options
export const globalCSS = injectGlobal`
  @import url("https://unpkg.com/react-select@1.2.1/dist/react-select.css");
  @import url('https://fonts.googleapis.com/css?family=Open+Sans');
  ${styledNormalize}
`;

const colors = {
  black: '#000000',
  white: '#FFFFFF',
  gray: [
    '#8e8e90', // 0
    '#161616', // 1
    '#F2F2F2', // 2
  ],
  blue: [
    '#273542', // 0
    '#5F7D8A', // 1
    '#0079B4', // 2
    '#A7CDE7', // 3
  ],
  cyan: [
  ],
  green: [
    '#90BE00', // 0
    '#E9FFAA', // 1
  ],
  orange: [
    '#CA5B01', // 0
  ],
  red: [
  ],
  yellow: [
    '#D8C6B1',
  ],
  transparent: 'transparent',
};

const fontSizes = [
  8, // 0
  10, // 1
  12, // 2
  15, // 3
  16, // 4
  18, // 5
  24, // 6
  35, // 7
  44, // 8
];

const breakpoints = [
  '40em', // 640px
  '52em', // 832px
  '64em', // 1024px
  '120em', // 1920px
];

const space = [
  0, // 0
  5, // 1
  10, // 2
  20, // 3
  40, // 4
  60, // 5
];

const fontWeights = [
  200, // 0
  300, // 1
  400, // 2
  500, // 3
  600, // 4
  700, // 5
  800, // 6
  900, // 7
];

const borders = [
  0,
  '1px solid',
  '2px solid',
];

const letterSpacings = [
  'normal',
  '0.1em',
  '0.2em',
  '0.3em',
];

const radii = [
  0,
  2,
  4,
  8,
];

const lineHeights = [
  1,
  1.125,
  1.25,
  1.5,
];

const fontFamily = {
  heading: '"Open Sans", Arial, Helvetica, sans-serif',
};

const heights = {
  fullHeight: '100%',
  fullVhMinusNav: 'calc(100vh - 246px)',
  fullHeightMinusNav: 'calc(100% - 246px)',
  fullVhMinusRefineListFooter: 'calc(100vh - 70px)',
  undefined: 'auto',
};


const Theme = {
  colors,
  fontSizes,
  breakpoints,
  space,
  fontWeights,
  borders,
  letterSpacings,
  radii,
  lineHeights,
  fontFamily,
  heights,
};

export default Theme;
