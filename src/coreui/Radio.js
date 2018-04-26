import styled from 'styled-components';
import {
  space,
  color,
} from 'styled-system';

const Radio = styled.input.attrs({
  type: 'radio',
})`
  ${space}
  ${color}
`;

export default Radio;
