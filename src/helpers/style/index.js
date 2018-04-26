import {
  responsiveStyle,
  style,
} from 'styled-system';

// @FIXME: This is to be deprecrated since styled-system
// now has a height function that is the same.
export const height = responsiveStyle({
  prop: 'height',
  cssProperty: 'height',
  numberToPx: true,
});

export const responsiveBackgroundSize = responsiveStyle({
  prop: 'responsiveBackgroundSize',
  alias: 'rbgSize',
  cssProperty: 'background-size',
});

export const hoverShadowEffect = '0 6px 14px rgba(0,0,0,0.05), 0 6px 10px rgba(0,0,0,0.05)';
export const hoverRemoveFilterEffect = `
  img {
    filter: none;
  }
`;

// Custom styles for hover (hover not part of styled-system)
export const hoverColor = style({
  prop: 'hoverColor', // Prop name being passed in
  cssProperty: 'color', // CSS property targeted
  key: 'colors', // key for `Theme.js`, pulling from same pool of colors
});
export const hoverBackgroundColor = style({
  prop: 'hoverBG',
  cssProperty: 'background-color',
  key: 'colors',
});
export const hoverBorderColor = style({
  prop: 'hoverBorderColor',
  cssProperty: 'border-color',
  key: 'colors',
});

// animation related
const endEvents = {
  animation: 'animationend',
  OAnimation: 'oAnimationEnd',
  MozAnimation: 'animationend',
  WebkitAnimation: 'webkitAnimationEnd',
};

const startEvents = {
  animation: 'animationstart',
  OAnimation: 'oAnimationStart',
  MozAnimation: 'animationStart',
  WebkitAnimation: 'webkitAnimationStart',
};

function whichEvent(events) {
  const el = document.createElement('fakeelement');
  for (const t in events) {
    if (el.style[t] !== undefined) {
      return events[t];
    }
  }
}


// Adds on to default transition (mainly intended for Links/NavLinks)
// INPUT1: str (or undefined), a legit CSS shorthand 'transition' property
// INPUT2 [optional]: str, CSS transition for the intended default [uses link default]
// OUTPUT: str, CSS transition incorporating desired default behavior
// NOTE: this is needed because we regularly pass transition props, but we want to
// avoid completely stomping out the desired default transition.
// This enables us to keep default, but can tweak by re-passing `color ...`, etc.
// NOTE: If you want to DISABLE transition ENTIRELY, can pass "all 0s"
export const extendDefaultTransition = (
  additionalTransition,
  defaultTransition = "color 0.5s linear, background-color 0.5s linear, border-color 0.5s linear",
) => {
  // We start with the default transition, modify based on what was passed.
  let transition = defaultTransition;
    if (additionalTransition) {
      transition = transition + `, ${additionalTransition}`;
    }
  return transition;
};

export const whichStartEvent = () => whichEvent(startEvents);
export const whichEndEvent = () => whichEvent(endEvents);

