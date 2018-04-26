import React from 'react';
import PropTypes from 'prop-types';
import { Nav } from '../';

const HeaderNav = ({
  children,
}) => {
  return (
    <Nav
      height={[70, 70, 80, 90]}
      boxSizing="border-box"
      boxShadow="0 1px 0 0 rgba(0, 0, 0, .15)"
      bg="white"
      w={1}
      px="3%"
      display="flex"
      justify={['flex-end', 'flex-end', 'flex-end', 'space-between']}
      align="center"
    >
      { children }
    </Nav>
  );
};

HeaderNav.propTypes = {
  children: PropTypes.any,
};

export default HeaderNav;
