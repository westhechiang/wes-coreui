import React from 'react';
import PropTypes from 'prop-types';
import { Text } from '../';

export const types = {
  H1: { // used by 'In Place / Stabilized' in rent roll
    fontFamily: 'sansSerif',
    fontSize: 3,
    fontWeight: 'semiBold',
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
