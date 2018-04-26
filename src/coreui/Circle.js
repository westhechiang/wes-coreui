import styled from 'styled-components';
import {
  width,
  height,
  color,
  space,
  borders,
  borderColor,
  textAlign,
  top,
  left,
  right,
  bottom,
  position,
} from 'styled-system';

const Circle = styled.div`
  ${color}
  ${borders}
  ${borderColor}
  ${space}
  ${textAlign}
  ${top}
  ${right}
  ${bottom}
  ${left}
  ${position}
  ${width}
  ${height}
  border-radius: 50%;
  overflow: hidden;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: center;
  ${props => (props.hover ? '&:hover { cursor: pointer; }' : '')}
`;

export default Circle;
