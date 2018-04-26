import Styled from 'styled-components';
import {
  height,
  position,
  color,
  width,
  top,
  space,
  left,
  zIndex,
  display,
  justifyContent,
  alignItems,
  boxShadow,
} from 'styled-system';

const Nav = Styled.nav`
  ${space}
  ${height}
  ${position}
  ${color}
  ${width}
  ${position}
  ${top}
  ${left}
  ${zIndex}
  ${display}
  ${justifyContent}
  ${alignItems}
  ${boxShadow}
  box-sizing: ${props => props.boxSizing || 'content-box'};
`;

export default Nav;
