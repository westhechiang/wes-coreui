import styled from 'styled-components';
import PropTypes from 'prop-types';
import {
  width,
  height,
  display,
  space,
  backgroundImage,
  backgroundSize,
  backgroundPosition,
  backgroundRepeat,
} from 'styled-system';


const SocialMediaIconBase = styled.div`
  ${backgroundImage}
  ${backgroundRepeat}
  ${backgroundSize}
  ${backgroundPosition}
  ${width}
  ${height}
  ${display}
  ${space}
`;

export default SocialMediaIconBase;
