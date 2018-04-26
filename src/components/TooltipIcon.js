import React from 'react';
import PropTypes from 'prop-types';

import {
  Image,
  ExtendedBox,
} from '../';
import icon from '../assets/tooltip_icon.svg';
import {
  isMobile,
} from '../helpers/utility';

const TooltipIcon = ({
  tooltipId,
  position,
  top,
  right,
  bottom,
  left,
  mt,
  mr,
  mb,
  ml,
}) => {
  return (
    <ExtendedBox
      position={position}
      top={top}
      right={right}
      bottom={bottom}
      left={left}
    >
      <span>
        <Image
          data-for={tooltipId}
          data-tip
          data-event={isMobile ? 'touchstart' : undefined}
          src={icon}
          w={[13, 13, 16, 16, 16]}
          mt={mt}
          mr={mr}
          mb={mb}
          ml={ml}
          hover
        />
      </span>
    </ExtendedBox>
  );
};

TooltipIcon.propTypes = {
  tooltipId: PropTypes.string.isRequired,
  position: PropTypes.string,
  top: PropTypes.string,
  right: PropTypes.string,
  bottom: PropTypes.string,
  left: PropTypes.string,
  mr: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.array,
  ]),
  ml: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.array,
  ]),
  mb: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.array,
  ]),
  mt: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.array,
  ]),
};

TooltipIcon.defaultProps = {
  mt: 0,
  mr: 0,
  mb: 0,
  ml: 0,
};

export default TooltipIcon;
