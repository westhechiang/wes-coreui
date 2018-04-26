import styled from 'styled-components';
import {
  color,
  space,
} from 'styled-system';

const Checkbox = styled.input.attrs({
  type: 'checkbox',
})`
  ${color}
  ${space}
  background: transparent;
`;

export default Checkbox;
