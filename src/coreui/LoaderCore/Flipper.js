import styled, { keyframes } from 'styled-components';
import {
  color,
  width,
  height,
  space,
} from 'styled-system';

const flip = () => {
  return keyframes`
    0% {
      transform: perspective(120px) rotateX(0deg) rotateY(0deg);
    }
    50% {
      transform: perspective(120px) rotateX(-180.1deg) rotateY(0deg);
    }
    100% {
      transform: perspective(120px) rotateX(-180deg) rotateY(-179.9deg);
    }
  `
}

const Flipper = styled.div`
  animation: ${() => flip()} 1.2s infinite ease-in-out;
  position: relative;
  display: block;
  height: inherit;
  width: inherit;
  transform-style: preserve-3d;
`;

export default Flipper;
