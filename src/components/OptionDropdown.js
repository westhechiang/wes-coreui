import React from 'react';
import PropTypes from 'prop-types';

import {
  ExtendedBox,
  ExtendedFlex,
  Heading,
  Link,
  Image,
} from '../';

import carat from '../assets/down_expand_blue2.svg';

// Timings for animations
const SLIDE_DURATION = 0.3; // How long slide up/down takes
const DELAY_AFTER_SLIDE = -0.2; // Delay between sliding and options [dis]appearing
const FADE_DURATION = 0.05; // Duration each option fading in, next immediately starts after

const OptionDropdown = ({
  handleClick,
  id,
  isActive,
  options,
  value,
  width,
  zIndex,
}) => {
  // Creates an option box for use in dropdown. Consumes array `options` from props.
  const createSingleOptionBox = (optionValue, index, optionArray) => {
    // Set up fade timings for dropdown options
    let fadeTransition;
    if (isActive) { // dropdown was just activated, need delays per each option
      const baseDelay = SLIDE_DURATION + DELAY_AFTER_SLIDE;
      const delayByIndex = FADE_DURATION * index;
      const totalDelay = baseDelay + delayByIndex;
      fadeTransition = `opacity ${FADE_DURATION}s ${totalDelay}s linear`;
    } else { // dropdown was just deactivated, no delay, just immediate fade out
      fadeTransition = `opacity ${FADE_DURATION}s linear`;
    }

    // Final option should have no border on bottom.
    const showBottomBorder = (optionArray.length - 1 !== index);
    return (
      <ExtendedBox
        key={index}
        width={width}
        borderColor="gray.8"
        borderBottom={showBottomBorder ? '1px solid' : '0'}
        opacity={isActive ? '1' : '0'}
        transition={fadeTransition}
        id={id}
        onClick={handleClick}
        visibility={isActive ? 'visible' : 'hidden'}
        value={value}
      >
        <Link
          type="L4"
          display="block"
          textAlign="center"
          width={width}
          value={optionValue}
          color="white"
          hoverColor="blue.2"
          m={0}
          py={20}
          visibility={isActive ? 'visible' : 'hidden'}
          id={id}
          onClick={handleClick}
        >
          {optionValue}
        </Link>
      </ExtendedBox>
    );
  };

  // Slide needs a delay depending on if going up or down. (Up goes after options)
  const slidingTransition = isActive ?
    `max-height ${SLIDE_DURATION}s ease-in-out` :
    `max-height ${SLIDE_DURATION}s ${FADE_DURATION + DELAY_AFTER_SLIDE}s ease-in-out`;


  return (
    <ExtendedFlex
      width={width}
      id={id}
      onClick={handleClick}
      value={value}
      justify="center"
      position="relative"
      zIndex={isActive ? zIndex : '0'}
      transition={isActive ? '0' : 'z-index 1s linear'}
      borderColor="blue.2"
      borderBottom="1px solid"
      hover
    >
      <Heading
        type="H6"
        color="blue.2"
        m={5}
        ml={-15}
        id={id}
        onClick={handleClick}
        value={value}
      >
        {value}
      </Heading>
      <Image
        src={carat}
        width={13}
        height={13}
        value={value}
        position="absolute"
        right="5px"
        bottom="10px"
        transition={'transform 0.2s linear'}
        transform={isActive ? 'rotate(180deg)' : 'none'}
        id={id}
        onClick={handleClick}
        hover
      />
      <ExtendedFlex
        position="absolute"
        top="100%"
        left="0"
        mt={1}
        bg="#101010"
        flexDirection="column"
        align="center"
        width={width}
        maxHeight={isActive ? '500px' : '0'}
        visibility={isActive ? 'visible' : 'hidden'}
        transition={slidingTransition}
      >
        {options.map(createSingleOptionBox)}
      </ExtendedFlex>
    </ExtendedFlex>
  );
};

OptionDropdown.propTypes = {
  width: PropTypes.array,
  zIndex: PropTypes.string,
  value: PropTypes.string,
  options: PropTypes.array,
  isActive: PropTypes.bool,
  handleClick: PropTypes.func,
  id: PropTypes.string,
};

export default OptionDropdown;
