import styled from 'styled-components';
import {
  width,
  height,
} from 'styled-system';

const Wrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate3d(-50%,-50%,0);
  perspective: 1200;
`

export default Wrapper;
