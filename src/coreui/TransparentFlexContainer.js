import styled from 'styled-components';

const TransparentFlexContainer = styled.div`
  background: rgba(0,0,0,.5);
  width: ${props => props.width || 'auto'};
  height: ${props => props.height || 'auto'};
  display: flex;
  padding: ${props => props.padding || 'none'};
  align-items: ${props => props.alignItems};
  box-sizing: border-box;
  justify-content: ${props => props.justifyContent};
  position: ${props => props.position || 'static'};
  top: ${props => props.top || 'auto'};
  right: ${props => props.right || 'auto'};
  left: ${props => props.left || 'auto'};
  bottom: ${props => props.bottom || 'auto'};
`;

export default TransparentFlexContainer;

