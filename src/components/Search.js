import React from 'react';
import PropTypes from 'prop-types';
import {
  ExtendedBox,
  TextInput,
  Image,
} from '../';

import {
  types,
} from './Body';

import image from '../assets/icon_search.svg';

const Search = ({
  placeholder,
  value,
  mt,
}) => {
  return (
    <ExtendedBox
      position="relative"
      w={[1, 1, 400, 400]}
      mt={mt}
    >
      <Image
        position="absolute"
        left="0px"
        top="6px"
        src={image}
      />
      <TextInput
        {...types.B1}
        value={value}
        placeholder={placeholder}
        fontFamily="sansSerif"
        textIndent="30px"
        bg="transparent"
        border={0}
        borderBottom={1}
        borderColor="gray.8"
        w={1}
      />
    </ExtendedBox>
  );
};

Search.propTypes = {
  placeholder: PropTypes.string,
  value: PropTypes.string,
  mt: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.array,
  ]),
};

export default Search;
