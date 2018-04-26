import styled from 'styled-components';
import {
  width,
  height,
  color,
} from 'styled-system';

const LoaderContainerDiv = styled.div`
  ${width}
  ${height}
  ${color}
  position: ${props => props.position || 'absolute'};
  top: ${props => props.top || '0'};
  right: ${props => props.right || '0'};
  left: ${props => props.left || '0'};
  bottom: ${props => props.bottom || '0'};
  z-index: ${props => props.zIndex || '0'};
`;

export default LoaderContainerDiv;
