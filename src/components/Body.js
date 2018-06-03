import React from 'react';
import PropTypes from 'prop-types';
import { Text } from '../';

export const types = {
  B1: {
    fontWeight: 1,
    fontSize: 3,
    fontFamily: 'sansSerif',
    lineHeight: 2,
  },
  B2: {
    fontWeight: 1,
    fontSize: 2,
    fontFamily: 'sansSerif',
    lineHeight: 2,
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
  type: PropTypes.oneOf(Object.keys(types)).isRequired,
};

Body.defaultProps = {
  color: 'black',
};

export default Body;
