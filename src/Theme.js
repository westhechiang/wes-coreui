import { injectGlobal } from 'styled-components';
import styledNormalize from 'styled-normalize';

// global css; only add to this if there are no other options
// TODO -- Vince/Wes -- Discuss where a better place for slick css stuff is.
// TODO -- two to look at are @import of slick css stuff
// Note regarding `.slick-dots` stuff
//   margin was done for design to pull dots together more than default CSS
//   li button stuff avoids bug with default `:focus` looking continually active
export const globalCSS = injectGlobal`
  @import url("https://use.typekit.net/yqf3dfe.css");
  @import url("https://cloud.typography.com/7455036/7907792/css/fonts.css");
  @import url("https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css");
  @import url("https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css");
  @import url("https://unpkg.com/react-select@1.2.1/dist/react-select.css");
  ${styledNormalize}
  .slick-dots li {
    margin: 0;
  }
  .slick-dots li button:focus:before {
    opacity: 0.25;
  }
  .slick-dots li.slick-active button:before {
    opacity: 0.75;
  }
`;

const colors = {
  orange: '#E9573E',
  white: '#FFFFFF',
  black: '#202020',
  // TODO: Post merging all projects into 1 repository,
  // do a grep and replace all gray.X that have been
  // deprecated
  gray: [
    '#F8F8F8', // 0
    '#F2F2F2', // 1
    'pink', // 2 - #808285 deprecated
    'pink', // 3 - #434A54 deprecated
    'pink', // 4 - #414042 deprecated
    'pink', // 5 - #A7A9AC deprecated
    'pink', // 6 - #E6E7E8 deprecated
    '#777777', // 7
    '#202020', // 8
    '#171717', // 9
    '#9b9b9b', // 10
    'pink', // 11 - #bebebe deprecated
    '#ededed', // 12
  ],
  blue: [
    '#4B89DC',
    '#176DB6',
    '#A4C2D5',
  ],
  transparent: 'transparent',
};

const fontSizes = [
];

const breakpoints = [
  '40em', // 640px
  '52em', // 832px
  '64em', // 1024px
  '120em', // 1920px
];

const space = [
  0,
  1,
  2,
  3,
  4,
  5,
];

const fontWeights = {
  extraLight: 200,
  light: 300,
  book: 400,
  medium: 500,
  bold: 700,
};

const borders = [
  0,
  '1px solid',
];

const letterSpacings = {
  normal: 'normal',
  large: '0.1em',
  xlarge: '0.2em',
};

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
  serif: 'mrs-eaves-xl-serif-narrow, serif',
  sansSerif: '"Gotham SSm A", "Gotham SSm B", Helvetica, Arial, sans-serif',
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
};

export default Theme;
