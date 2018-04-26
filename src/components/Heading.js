import React from 'react';
import PropTypes from 'prop-types';
import { Text } from '../';

export const types = {
  H1: {
    fontSize: [60, 60, 110, 130, 170],
    fontFamily: 'serif',
    fontWeight: 'normal',
    textTransform: 'uppercase',
    letterSpacing: '-0.029em',
  },
  H2: {
    fontSize: [28, 36, 36, 42, 52],
    fontFamily: 'serif',
    fontWeight: 'normal',
    textTransform: 'uppercase',
    letterSpacing: '0.036em',
  },
  H3: {
    fontSize: [28, 36, 28, 28, 36], // xs, and s always match H2
    fontFamily: 'serif',
    fontWeight: 'normal',
    textTransform: 'uppercase',
    letterSpacing: '0.047em',
  },
  H4: {
    fontSize: [12, 12, 12, 12, 18],
    fontFamily: 'serif',
    fontWeight: 'normal',
    textTransform: 'uppercase',
    letterSpacing: '0.083em',
  },
  H5: {
    fontSize: [18, 18, 20, 20, 28],
    fontFamily: 'sansSerif',
    fontWeight: 'normal',
    textTransform: 'none',
    letterSpacing: 'normal',
  },
  H6: {
    fontSize: [14, 14, 16, 18, 24],
    fontFamily: 'sansSerif',
    fontWeight: 'normal',
    textTransform: 'none',
    letterSpacing: 'normal',
    lineHeight: '1.5',
  },
  H7: {
    fontSize: [12, 12, 14, 14, 20],
    fontFamily: 'sansSerif',
    fontWeight: 'extraLight',
    textTransform: 'uppercase',
    letterSpacing: 'normal',
    lineHeight: '1.8',
  },
  H8: {
    fontSize: [10, 10, 10, 12, 16],
    fontFamily: 'sansSerif',
    fontWeight: '500',
    textTransform: 'uppercase',
    letterSpacing: '0.150em',
  },
  H9: {
    fontSize: [22, 22, 26, 32, 42],
    fontFamily: 'serif',
    fontWeight: 'normal',
    textTransform: 'uppercase',
    letterSpacing: '0.131em',
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
  type: PropTypes.oneOf([
    'H1',
    'H2',
    'H3',
    'H4',
    'H5',
    'H6',
    'H7',
    'H8',
    'H9',
  ]).isRequired,
};

Heading.defaultProps = {
  color: 'black', // NOTE: Not "true black" (#000000), Will use Theme's black[-ish].
};

export default Heading;
