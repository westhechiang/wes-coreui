import styled from 'styled-components';
import PropTypes from 'prop-types';
import {
  fontSize,
  width,
  height,
  maxWidth,
  minWidth,
  space,
  borders,
  color,
  textAlign,
  lineHeight,
  fontWeight,
  letterSpacing,
  propTypes,
  display,
} from 'styled-system';
import CleanElement from 'clean-element';

import {
  hoverColor,
  hoverBackgroundColor,
  hoverBorderColor,
  // default: "color 0.5s linear, background-color 0.5s linear, border-color 0.5s linear",
  // NOTE: If you want to DISABLE transition ENTIRELY, can pass transition prop "all 0s"
  extendDefaultTransition,
} from '../helpers/style';
import Theme from '../Theme';

const CleanA = CleanElement('a');

CleanA.propTypes = {
  ...propTypes.textStyle,
  ...propTypes.textAlign,
  ...propTypes.fontSize,
  ...propTypes.fontFamily,
  ...propTypes.width,
  ...propTypes.height,
  ...propTypes.maxWidth,
  ...propTypes.minWidth,
  ...propTypes.space,
  ...propTypes.borders,
  ...propTypes.color,
  ...propTypes.textAlign,
  ...propTypes.lineHeight,
  ...propTypes.fontWeight,
  ...propTypes.letterSpacing,
  ...propTypes.propTypes,
  ...propTypes.textStyle,
  ...propTypes.hover,
  ...propTypes.display,
  textTransform: PropTypes.string,
  borderColor: PropTypes.string,
  hoverColor: PropTypes.string,
  hoverBackgroundColor: PropTypes.string,
  hoverBorderColor: PropTypes.string,
  hoverBG: PropTypes.string,
  whiteSpace: PropTypes.string,
};


const TextLink = styled(CleanA)`
  ${fontSize}
  ${width}
  ${height}
  ${maxWidth}
  ${minWidth}
  ${space}
  ${borders}
  ${color}
  ${textAlign}
  ${lineHeight}
  ${fontWeight}
  ${letterSpacing}
  ${display}
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-family: ${props => Theme.fontFamily[props.fontFamily] || 'Helvetica, Arial, sans-serif'};
  text-indent: ${props => props.textIndent};
  text-transform: ${props => (props.textTransform || 'none')};
  font-style: ${props => props.fontStyle || 'normal'};
  white-space: ${props => props.whiteSpace || 'normal'};
  opacity: ${props => props.opacity || '1'};
  box-sizing: border-box;
  text-decoration: ${props => (props.textDecoration || 'none')};
  transition: ${props => extendDefaultTransition(props.transition)};

  &:hover {
    cursor: pointer;
    ${hoverColor}
    ${hoverBackgroundColor}
    ${hoverBorderColor}
  }

  &:visited {
    ${color}
  }
`;

export default TextLink;
