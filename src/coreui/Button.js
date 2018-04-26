import styled from 'styled-components';
import {
  space,
  color,
  border,
  borderRadius,
  width,
  fontSize,
  textAlign,
  fontWeight,
} from 'styled-system';
import Theme from '../Theme';

const Button = styled.button`
  ${space}
  ${color}
  ${border}
  ${borderRadius}
  ${width}
  ${fontSize}
  ${fontWeight}
  ${textAlign}
  height: ${props => props.height || 'auto'};
  top: ${props => props.top || 'auto'};
  right: ${props => props.right || 'auto'};
  left: ${props => props.left || 'auto'};
  bottom: ${props => props.bottom || 'auto'};
  text-transform: ${props => (props.uppercase ? 'uppercase' : 'none')};
  z-index: ${props => props.zIndex || 'auto'};
  position: ${props => props.position || 'static'};
  transition: 0.2s ease-in-out opacity;
  font-family: ${Theme.fontFamily.sansSerif};
  ${props => (props.outline ? `outline: ${props.outline};` : '')}

  &:hover {
    cursor: pointer;
  }

  &:disabled {
    cursor: not-allowed;
  }
`;

export default Button;
