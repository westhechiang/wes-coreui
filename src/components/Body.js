import React from 'react';
import PropTypes from 'prop-types';
import { Text } from '../';

export const types = {
  B1: { // used by 'compare with' text in rent roll
    fontWeight: 'semiBold',
    fontSize: 2,
    fontFamily: 'sansSerif',
  },
  B2: {
    fontSize: 10,
    fontWeight: 'semiBold',
  },
  B3: {
    fontSize: 14,
    fontWeight: 'medium',
  },
  B4: {
    fontSize: 15,
    fontWeight: 'medium',
  },
  B5: {
    fontSize: 12,
    fontWeight: 'semiBold',
  }
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
