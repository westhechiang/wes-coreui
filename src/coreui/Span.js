import styled from 'styled-components';
import {
  fontSize,
  width,
  space,
  color,
  textAlign,
  lineHeight,
  fontWeight,
  letterSpacing,
  minHeight,
  maxHeight,
} from 'styled-system';
import Theme from '../Theme';

const Span = styled.span`
  ${fontSize}
  ${width}
  ${space}
  ${color}
  ${textAlign}
  ${lineHeight}
  ${fontWeight}
  ${letterSpacing}
  ${minHeight}
  ${maxHeight}
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-family: ${props => Theme.fontFamily[props.fontFamily] || 'Helvetica, Arial, sans-serif'};
  text-indent: ${props => props.textIndent || 0};
  text-transform: ${props => (props.textTransform || 'none')};
  font-style: ${props => props.fontStyle || 'normal'};
  white-space: ${props => props.whiteSpace || 'normal'};
  display: ${props => props.display || 'inline'};
  opacity: ${props => props.opacity || '1'};
  box-sizing: border-box;
`;

export default Span;
