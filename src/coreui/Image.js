import styled from 'styled-components';
import {
  space,
  width,
  height,
} from 'styled-system';

import {
  Button,
} from '../';

const hoverColorizeGray = 'filter: grayscale(60%)';

// IE11 does not behave well with image aspect ratios that are in nested flexboxes.
// Below is a weird, hacky fix found after much searching.
// stackoverflow.com/questions/41489798/keep-image-ratio-using-max-width-and-max-height-in-ie-11
const IEAspectRatioFix = 'flex: 0 0 auto';

const Image = styled.img`
  ${space}
  ${width}
  ${height}
  display: block;
  position: ${props => props.position || 'static'};
  top: ${props => props.top || 'auto'};
  bottom: ${props => props.bottom || 'auto'};
  left: ${props => props.left || 'auto'};
  right: ${props => props.right || 'auto'};
  transition: ${props => props.transition || 'all 0s 0s ease'};
  z-index: ${props => props.zIndex || 'auto'};
  transform: ${props => props.transform || 'none'};
  max-width: ${props => props.maxWidth || 'none'};
  opacity: ${props => props.opacity || '1'};
  visibility: ${props => props.visibility || 'visible'};
  max-height: ${props => props.maxHeight || 'none'};
  ${props => (props.hoverColorize ? hoverColorizeGray : '')};

  &:hover {
    cursor: ${props => (props.hover ? 'pointer' : 'auto')};
  }

  ${Button}:hover & {
    opacity: ${props => (props.dimOnButtonParentHover ? '0.4' : '1')};
  }

  ${props => (props.IEAspectRatioFix ? IEAspectRatioFix : '')};
`;

export default Image;
