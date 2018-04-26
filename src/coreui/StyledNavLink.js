// This is a special component only to be used with react-router
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import {
  fontSize,
  width,
  height,
  maxWidth,
  minWidth,
  space,
  borders,
  borderColor,
  color,
  textAlign,
  lineHeight,
  fontWeight,
  letterSpacing,
  propTypes,
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

const CleanNavLink = CleanElement(NavLink);

CleanNavLink.propTypes = {
  ...propTypes.textStyle,
  ...propTypes.fontSize,
  ...propTypes.width,
  ...propTypes.height,
  ...propTypes.space,
  ...propTypes.borders,
  ...propTypes.borderColor,
  ...propTypes.color,
  ...propTypes.textAlign,
  ...propTypes.lineHeight,
  ...propTypes.fontWeight,
  ...propTypes.letterSpacing,
  ...propTypes.minWidth,
  ...propTypes.maxWidth,
  textTransform: PropTypes.string,
  borderColor: PropTypes.string,
  hoverColor: PropTypes.string,
  hoverBackgroundColor: PropTypes.string,
  hoverBorderColor: PropTypes.string,
  hoverBG: PropTypes.string,
  whiteSpace: PropTypes.string,
  withActiveStyle: PropTypes.bool,
};

const StyledNavLink = styled(CleanNavLink)`
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
  ${borderColor}
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-family: ${props => Theme.fontFamily[props.fontFamily] || 'Helvetica, Arial, sans-serif'};
  text-indent: ${props => props.textIndent};
  text-transform: ${props => (props.textTransform || 'none')};
  font-style: ${props => props.fontStyle || 'normal'};
  white-space: ${props => props.whiteSpace || 'normal'};
  display: ${props => props.display || 'inline'};
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

  &.active {
    background: black;
    color: white;
  }
`;

export default StyledNavLink;
