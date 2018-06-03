import React from 'react';
import PropTypes from 'prop-types';
import { Text } from '../';

export const types = {
  H1: {
    fontFamily: 'heading',
    fontSize: 7,
    fontWeight: 2,
    letterSpacing: 'xlarge',
    textTransform: 'uppercase',
  },
  H2: {
    fontFamily: 'heading',
    fontSize: 3,
    fontWeight: 4,
    letterSpacing: 'normal',
    textTransform: 'uppercase',
  },
  H3: {
    fontFamily: 'heading',
    fontSize: 1,
    fontWeight: 5,
    letterSpacing: 'xlarge',
    textTransform: 'uppercase',
  },
  H4: {
    fontFamily: 'heading',
    fontSize: 6,
    fontWeight: 2,
    letterSpacing: 'normal',
    textTransform: 'uppercase',
  },
  H5: {
    fontFamily: 'heading',
    fontSize: 0,
    fontWeight: 5,
    letterSpacing: 'xlarge',
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
