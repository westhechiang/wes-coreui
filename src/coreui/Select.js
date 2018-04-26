import Select from 'react-select';
import styled from 'styled-components';
import {
  space,
} from 'styled-system';
import Theme from '../Theme';

const StyledSelect = styled(Select)`
  ${space}

  & .Select-control {
    border-radius: 2px;
    border: none;
    background: white;
    font-family: ${Theme.fontFamily.sansSerif};
    font-weight: 300;
    font-size: 14px;
  }

  & .Select-option {
    font-family: ${Theme.fontFamily.sansSerif};
    font-weight: 300;
    font-size: 14px;

    &.is-selected,
    &.is-focused {
      background-color: ${Theme.colors.gray[0]};
    }
  }

  & .Select-menu-outer {
    z-index: 3;
  }
`;

export default StyledSelect;
