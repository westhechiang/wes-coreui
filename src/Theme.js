import { injectGlobal } from 'styled-components';
import styledNormalize from 'styled-normalize';

// global css; only add to this if there are no other options
export const globalCSS = injectGlobal`
  @import url("https://unpkg.com/react-select@1.2.1/dist/react-select.css");
  @import url("https://use.typekit.net/shl5spr.css");
  ${styledNormalize}
`;

const colors = {
  black: '#000000',
  white: '#FFFFFF',
  gray: [
    '#8e8e90',
    '#161616',
  ],
  blue: [
    '#1D4E63',
    '#5F7D8A',
    '#0079B4',
    '#A7CDE7',
  ],
  cyan: [
  ],
  green: [
    '#90BE00',
    '#E9FFAA'
  ],
  orange: [
    '#CA5B01'
  ],
  red: [
  ],
  yellow: [
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

const breakpoints = Object.values({
  0: '40em', // 640px
  1: '52em', // 832px
  2: '64em', // 1024px
  3: '120em', // 1920px
});

const space = [
  0, // 0
  5, // 1
  10, // 2
  20, // 3
  40, // 4
  60, // 5
];

const fontWeights = {
  extraLight: 200,
  light: 300,
  book: 400,
  medium: 500,
  semiBold: 600,
  bold: 700,
};

const borders = [
  0,
  '1px solid',
  '2px solid',
];

const letterSpacings = {
  normal: 'normal',
  large: '0.1em',
  xlarge: '0.2em',
};

const radii = Object.values({
  0: 0,
  1: 2,
  2: 4,
  3: 8,
});

const lineHeights = Object.values({
  0: 1,
  1: 1.125,
  2: 1.25,
  3: 1.5,
});

const fontFamily = {
  sansSerif: 'Gibson, Arial, Helvetica, sans-serif',
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
