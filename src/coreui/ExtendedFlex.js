import styled from 'styled-components';
import PropTypes from 'prop-types';
import {
  space,
  borders,
  borderColor,
  width,
  position,
  propTypes,
  maxWidth,
  minWidth,
  minHeight,
  maxHeight,
  flexDirection,
  flexWrap,
  alignItems,
  justifyContent,
  color,
  top,
  right,
  bottom,
  display,
  left,
  backgroundImage,
  backgroundPosition,
  backgroundRepeat,
  backgroundSize,
} from 'styled-system';
import CleanElement from 'clean-element';

import {
  height,
  hoverShadowEffect,
  hoverRemoveFilterEffect,
  responsiveBackgroundSize,
} from '../helpers/style';

const CleanFlex = CleanElement('div');

CleanFlex.propTypes = {
  ...propTypes.borders,
  ...propTypes.borderColor,
  ...propTypes.color,
  ...propTypes.width,
  ...propTypes.height,
  ...propTypes.wrap,
  ...propTypes.maxWidth,
  ...propTypes.minWidth,
  ...propTypes.minHeight,
  ...propTypes.maxHeight,
  ...propTypes.borderBottom,
  ...propTypes.borderTop,
  ...propTypes.borderRight,
  ...propTypes.borderLeft,
  ...propTypes.bottom,
  ...propTypes.top,
  ...propTypes.right,
  ...propTypes.left,
  ...propTypes.flexDirection,
  ...propTypes.textAlign,
  ...propTypes.justifyContent,
  ...propTypes.zIndex,
  ...propTypes.backgroundImage,
  ...propTypes.responsiveBackgroundSize,
  ...propTypes.backgroundPosition,
  ...propTypes.backgroundRepeat,
  ...propTypes.position,
  ...propTypes.space,
  h: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.array,
    PropTypes.number,
  ]),
  boxSizing: PropTypes.string,
  hover: PropTypes.bool,
  hoverShadow: PropTypes.bool,
  hoverRemoveFilter: PropTypes.bool,
  rbgSize: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.array,
    PropTypes.number,
  ]),
  overflowY: PropTypes.string,
  flexShrink: PropTypes.string,
};

const ExtendedFlex = styled(CleanFlex)`
  ${space}
  ${width}
  ${height}
  ${borders}
  ${borderColor}
  ${maxWidth}
  ${minWidth}
  ${minHeight}
  ${maxHeight}
  ${flexDirection}
  ${alignItems}
  ${justifyContent}
  ${color}
  ${flexWrap}
  ${top}
  ${right}
  ${bottom}
  ${left}
  ${backgroundImage}
  ${responsiveBackgroundSize}
  ${backgroundPosition}
  ${backgroundRepeat}
  ${backgroundSize}
  ${display}
  ${position}
  box-sizing: ${props => props.boxSizing || 'border-box'};
  position: ${props => props.position || 'static'};
  opacity: ${props => props.opacity || '1'};
  transition: ${props => props.transition || 'all 0s 0s ease'};
  z-index: ${props => props.zIndex || 'auto'};
  overflow-y: ${props => props.overflowY || 'visible'};
  flex-shrink: ${props => props.flexShrink || '1'};

  &:hover {
    box-shadow: ${props => (props.hoverShadow ? hoverShadowEffect : 'none')};
    cursor: ${props => (props.hover ? 'pointer' : 'auto')};
    ${props => (props.hoverRemoveFilter ? hoverRemoveFilterEffect : '')}
  }
`;

ExtendedFlex.defaultProps = {
  display: 'flex',
};

export default ExtendedFlex;
