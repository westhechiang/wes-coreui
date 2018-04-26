import React from 'react';
import PropTypes from 'prop-types';

import {
  Link,
  Flex,
  Image,
} from '../';

import down from '../assets/down.svg';

const ShowMore = ({
  title,
  handleClick,
}) => {
  return (
    <Flex
      py={[40, 80]}
      w={1}
      align="center"
      justify="center"
    >
      <Link
        type="L4"
        onClick={handleClick}
      >
        <Flex
          flexDirection="column"
          align="center"
        >
          {title}
          <Image
            src={down}
            hover
          />
        </Flex>
      </Link>
    </Flex>
  );
};

ShowMore.propTypes = {
  title: PropTypes.string,
  handleClick: PropTypes.func,
};

export default ShowMore;
