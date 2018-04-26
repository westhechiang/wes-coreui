import styled from 'styled-components';
import {
  color,
  fontSize,
  borders,
  borderColor,
  width,
  space,
  textAlign,
  lineHeight,
  fontWeight,
} from 'styled-system';

import { Theme } from '../';

const TextInput = styled.input.attrs({
  type: 'text',
})`
  ${color}
  ${fontSize}
  ${width}
  ${lineHeight}
  ${space}
  ${fontWeight}
  ${textAlign}
  ${borders}
  ${borderColor}
  box-sizing: border-box;
  font-family: ${props => Theme[props.fontFamily] || 'Helvetica, Arial, sans-serif'};
  box-shadow: none;
  height: 30px;
  display: ${props => props.display || 'inline'};
  text-indent: ${props => props.textIndent || '0'}

  &::placeholder {
    ${fontSize}
    color: ${props => props.placeholderColor || 'black'};
    font-family: ${props => Theme[props.fontFamily] || 'Helvetica, Arial, sans-serif'};
  }
`;

export default TextInput;
