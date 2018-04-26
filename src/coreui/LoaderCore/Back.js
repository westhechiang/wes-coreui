import styled from 'styled-components';
import {
  color,
} from 'styled-system';

import frontBackStyles from './frontBackStyles';

const Back = styled.div`
  ${{ ...frontBackStyles }}
  ${color}
  transform: rotateY(-180deg);
`

export default Back;
