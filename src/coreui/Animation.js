import styled, { keyframes } from 'styled-components';
import * as animations from 'rm-react-animations';

const mergeAnimations = (animationArray) => {
  return animationArray.reduce(
    (prev, next, index) => {
      return animations.merge(
        index ? prev : animations[prev],
        animations[next],
      );
    },
  );
};

const frames = (name) => {
  const selectedAnimations = name.split(' ');
  return keyframes`
    ${selectedAnimations.length > 1 ?
    mergeAnimations(selectedAnimations) :
    animations[name]}
  `;
};

const Animation = styled.div`
  animation: ${({ name }) => frames(name)} ${({ duration }) => (duration || '1s')} ${({ timing }) => (timing || 'ease')} ${({ delay }) => delay || '0s'};
  animation-fill-mode: ${({ fillMode }) => fillMode || 'forwards'};
`;

export default Animation;
