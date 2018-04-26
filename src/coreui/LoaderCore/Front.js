import styled from 'styled-components';
import {
  color,
} from 'styled-system';

import frontBackStyles from './frontBackStyles';

const Front = styled.div`
  ${{ ...frontBackStyles }}
  ${color}
`

export default Front;
