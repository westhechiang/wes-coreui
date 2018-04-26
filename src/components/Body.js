import React from 'react';
import PropTypes from 'prop-types';
import { Text } from '../';

export const types = {
  B1: {
    fontSize: [13, 13, 14, 14, 18],
    fontFamily: 'sansSerif',
    fontWeight: 'extraLight',
    textTransform: 'none',
    fontStyle: 'normal',
    letterSpacing: 'normal',
    lineHeight: 1.75,
  },
  B2: {
    fontSize: [12, 12, 12, 12, 14],
    fontFamily: 'sansSerif',
    fontWeight: 'extraLight',
    textTransform: 'none',
    fontStyle: 'italic',
    letterSpacing: 'normal',
    lineHeight: 1.75,
  },
  B3: {
    fontSize: [10, 10, 12, 12, 15],
    fontFamily: 'sansSerif',
    fontWeight: 'normal',
    textTransform: 'none',
    fontStyle: 'normal',
    letterSpacing: 'normal',
    lineHeight: 1.75,
  },
  B4: {
    fontSize: [20, 20, 26, 26, 30],
    fontFamily: 'serif',
    fontWeight: 'normal',
    textTransform: 'none',
    fontStyle: 'normal',
    letterSpacing: 'normal',
    lineHeight: 1.5,
  },
  B5: {
    fontSize: [10, 10, 12, 12, 14],
    fontFamily: 'sansSerif',
    fontWeight: 'normal',
    textTransform: 'none',
    fontStyle: 'normal',
    letterSpacing: 'normal',
    lineHeight: 1.5,
  },
};

const Body = (props) => {
  const { children, type, ...passedProps } = props;

  return (
    <Text
      fontSize={types[type].fontSize}
      fontFamily={types[type].fontFamily}
      fontWeight={types[type].fontWeight}
      textTransform={types[type].textTransform}
      fontStyle={types[type].fontStyle}
      letterSpacing={types[type].letterSpacing}
      lineHeight={types[type].lineHeight}
      {...passedProps}
    >
      { children }
    </Text>
  );
};

Body.propTypes = {
  children: PropTypes.any,
  type: PropTypes.oneOf([
    'B1',
    'B2',
    'B3',
    'B4',
    'B5',
  ]).isRequired,
};

Body.defaultProps = {
  color: 'black', // NOTE: Not "true black" (#000000), Will use Theme's black[-ish].
};

export default Body;
