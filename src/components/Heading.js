import React from 'react';
import PropTypes from 'prop-types';
import { Text } from '../';

export const types = {
  H1: {
    fontFamily: 'heading',
    fontSize: 7,
    fontWeight: 7,
    letterSpacing: 2,
    textTransform: 'uppercase',
  },
  H2: {
    fontFamily: 'heading',
    fontSize: 3,
    fontWeight: 4,
    letterSpacing: 0,
    textTransform: 'uppercase',
  },
  H3: {
    fontFamily: 'heading',
    fontSize: 2,
    fontWeight: 5,
    letterSpacing: 1,
    textTransform: 'uppercase',
  },
  H4: {
    fontFamily: 'heading',
    fontSize: 6,
    fontWeight: 2,
    letterSpacing: 0,
    textTransform: 'uppercase',
  },
  H5: {
    fontFamily: 'heading',
    fontSize: 0,
    fontWeight: 4,
    letterSpacing: 0,
    textTransform: 'uppercase',
  },
};

const Heading = (props) => {
  const { children, type, ...passedProps } = props;

  return (
    <Text
      fontSize={types[type].fontSize}
      fontFamily={types[type].fontFamily}
      fontWeight={types[type].fontWeight}
      textTransform={types[type].textTransform}
      letterSpacing={types[type].letterSpacing}
      lineHeight={types[type].lineHeight}
      {...passedProps}
    >
      { children }
    </Text>
  );
};

Heading.propTypes = {
  children: PropTypes.any,
  type: PropTypes.oneOf(Object.keys(types)).isRequired,
};

Heading.defaultProps = {
  color: 'black',
};

export default Heading;
