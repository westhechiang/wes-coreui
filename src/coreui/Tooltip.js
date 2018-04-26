import React from 'react';
import ReactTooltip from 'react-tooltip';
import styled from 'styled-components';
import {
  color,
  space,
  maxWidth,
  width,
} from 'styled-system';

import {
  hoverShadowEffect,
} from '../helpers/style';

import {
  isMobile,
} from '../helpers/utility';

const StyledTooltip = styled(ReactTooltip)`
  &.__react_component_tooltip {

    &.show {
      opacity: 1;
    }

    &.type-dark {
      ${color}
      ${space}
      ${maxWidth}
      ${width}
      border-radius: 1px;
      box-shadow: ${hoverShadowEffect};

      &.border {
        border: 1px solid #202020;

        &.place-top:before {
          border-top: 8px solid #202020;
        }

        &.place-top:after {
          border-top: 6px solid white;
        }

        &.place-right:before {
          border-right: 8px solid #202020;
        }

        &.place-right:after {
          border-right: 6px solid white;
        }

        &.place-bottom:before {
          border-bottom: 8px solid #202020;
        }

        &.place-bottom:after {
          border-bottom: 6px solid white;
        }

        &.place-left:before {
          border-left: 8px solid #202020;
        }

        &.place-left:after {
          border-left: 6px solid white;
        }
      }
    }
  }
`;

const Tooltip = (props) => {
  return (
    <StyledTooltip
      {...props}
      globalEventOff={isMobile ? 'touchstart' : undefined}
      style={{ cursor: 'pointer' }}
      effect="solid"
      maxWidth={[200, 300]}
      w={[200, 300]}
      bg="white"
      p={40}
      border
    />
  );
};

export default Tooltip;
