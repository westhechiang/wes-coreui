import styled from 'styled-components';
import {
  space,
  color,
  minHeight,
  maxHeight,
} from 'styled-system';

const Background = styled.div`
  ${color}
  ${space}
  ${minHeight}
  ${maxHeight}
  width: 100%;
  height: ${props => props.height || '100%'};
  min-height: ${props => props.minHeight || '0'};
  max-height: ${props => props.maxHeight || 'none'};
  background: url(${props => props.content}) no-repeat;
  background-position: ${props => props.backgroundPosition || 'center center'};
  box-sizing: border-box;
  position: ${props => (props.position || 'relative')};
  background-size: cover;
`;

export default Background;
