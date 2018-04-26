// This is a special component only to be used with react-router
import React from 'react';
import PropTypes from 'prop-types';

import { StyledNavLink, StyledLink } from '../';
import { types as linkTypes } from './Link';
import { types as dataTypes } from './Data';

const types = {
  ...linkTypes,
  ...dataTypes,
};

const NavLink = (props) => {
  const { children, type, withActiveStyle, ...passedProps } = props;

  const reWrittenPassedProps = {
    ...passedProps,
    ...(window.Drupal ? {
      onClick: () => {
        if (!passedProps.onClick || passedProps.onClick() !== false) {
          window.location.reload();
        }
      },
    } : {}),
  };

  return withActiveStyle ?
    <StyledNavLink
      fontSize={types[type].fontSize}
      fontFamily={types[type].fontFamily}
      fontWeight={types[type].fontWeight}
      textTransform={types[type].textTransform}
      letterSpacing={types[type].letterSpacing}
      textDecoration={types[type].textDecoration}
      border={types[type].border}
      borderColor={types[type].borderColor}
      display={types[type].display}
      width={types[type].width}
      height={types[type].height}
      maxWidth={types[type].maxWidth}
      minWidth={types[type].minWidth}
      px={types[type].px}
      py={types[type].py}
      lineHeight={types[type].lineHeight}
      textAlign={types[type].textAlign}
      bg={types[type].bg}
      color={types[type].color}
      hoverBG={types[type].hoverBG}
      hoverColor={types[type].hoverColor ? types[type].hoverColor : 'black'}
      hoverBorderColor={types[type].hoverBorderColor}
      {...reWrittenPassedProps}
    >
      { children }
    </StyledNavLink> :
    <StyledLink
      fontSize={types[type].fontSize}
      fontFamily={types[type].fontFamily}
      fontWeight={types[type].fontWeight}
      textTransform={types[type].textTransform}
      letterSpacing={types[type].letterSpacing}
      textDecoration={types[type].textDecoration}
      border={types[type].border}
      borderColor={types[type].borderColor}
      display={types[type].display}
      width={types[type].width}
      height={types[type].height}
      maxWidth={types[type].maxWidth}
      minWidth={types[type].minWidth}
      px={types[type].px}
      py={types[type].py}
      lineHeight={types[type].lineHeight}
      textAlign={types[type].textAlign}
      bg={types[type].bg}
      color={types[type].color}
      hoverBG={types[type].hoverBG}
      hoverColor={types[type].hoverColor ? types[type].hoverColor : 'black'}
      hoverBorderColor={types[type].hoverBorderColor}
      {...reWrittenPassedProps}
    >
      { children }
    </StyledLink>;
};

NavLink.defaultProps = {
  withActiveStyle: true,
};

NavLink.propTypes = {
  children: PropTypes.any,
  type: PropTypes.oneOf(
    Object.keys(types),
  ).isRequired,
  withActiveStyle: PropTypes.bool,
};

export default NavLink;
