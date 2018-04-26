import React from 'react';
import PropTypes from 'prop-types';
import {
  ExtendedFlex,
  ExtendedBox,
  Heading,
  Body,
  Link,
} from '../';

const StackableCallout = ({
  header,
  subHeader,
  linkText,
  linkUrl,
  borderRight,
  borderColor,
  maxWidth,
  bg,
  w,
}) => {
  return (
    <ExtendedFlex
      bg={bg}
      flexDirection="column"
      align="flex-start"
      justify="center"
      position="relative"
      w={w}
      px="10%"
      maxWidth={maxWidth}
      pt={20}
      pb={40}
      borderRight={borderRight}
      borderColor={borderColor}
    >
      <Heading
        type="H6"
        color="black"
        textTransform="uppercase"
        m={0}
      >
        {header}
      </Heading>
      <ExtendedBox
        height="120px"
        pt={20}
      >
        <Body
          type="B1"
          m={0}
        >
          {subHeader}
        </Body>
      </ExtendedBox>
      <Link
        type="L4"
        href={linkUrl}
      >
        {linkText}
      </Link>
      {
        borderRight &&
        <ExtendedBox
          w={1}
          height={1}
          mt={40}
          bg="gray.7"
          display={['block', 'block', 'block', 'none']}
        />
      }
    </ExtendedFlex>
  );
};

StackableCallout.propTypes = {
  header: PropTypes.string,
  subHeader: PropTypes.string,
  linkText: PropTypes.string,
  linkUrl: PropTypes.string,
  borderRight: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.array,
  ]),
  borderColor: PropTypes.string,
  bg: PropTypes.string,
  w: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.array,
  ]),
  maxWidth: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.array,
  ]),
};

StackableCallout.defaultProps = {
  w: 400,
  maxWidth: 400,
};

export default StackableCallout;
