import styled from 'styled-components';
import PropTypes from 'prop-types';
import {
  color,
  propTypes,
} from 'styled-system';
import CleanElement from 'clean-element';

import {
  hoverColor,
} from '../helpers/style';

const CleanA = CleanElement('a');

CleanA.propTypes = {
  ...propTypes.color,
  hoverColor: PropTypes.string,
};

const InlineTextLink = styled(CleanA)`
  ${color}
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-decoration: ${props => (props.textDecoration || 'none')};
  transition: ${props => props.transition || 'none'};

  &:visited {
    ${color}
  }

  &:hover {
    cursor: pointer;
    ${hoverColor}
  }
`;

InlineTextLink.defaultProps = {
  color: 'blue.1',
  hoverColor: 'black',
  transition: 'color 0.5s linear',
};

export default InlineTextLink;
