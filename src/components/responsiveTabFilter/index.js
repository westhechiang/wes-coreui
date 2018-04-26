import React from 'react';
import PropTypes from 'prop-types';
import { Box, ExtendedBox } from '../../';

import TabFilter from './TabFilter';
import SelectFilter from './SelectFilter';

const ResponsiveFilter = ({
  filterItems,
  selectedFilterValue,
  updateSelectedFilterValue,
  type,
}) => {
  const types = {
    both: () => (
      <Box
        px={[40, 20, 20, 20, 0]}
        pt={[20, 40]}
      >
        <ExtendedBox
          display={['none', 'none', 'none', 'block']}
        >
          <TabFilter
            filterItems={filterItems}
            selectedFilterValue={selectedFilterValue}
            updateSelectedFilterValue={updateSelectedFilterValue}
          />
        </ExtendedBox>
        <ExtendedBox
          display={['block', 'block', 'block', 'none']}
        >
          <SelectFilter
            filterItems={filterItems}
            selectedFilterValue={selectedFilterValue}
            updateSelectedFilterValue={updateSelectedFilterValue}
          />
        </ExtendedBox>
      </Box>
    ),
    selectOnly: () => (
      <Box
        px={[40, 20]}
        pt={[20, 40]}
      >
        <SelectFilter
          filterItems={filterItems}
          selectedFilterValue={selectedFilterValue}
          updateSelectedFilterValue={updateSelectedFilterValue}
        />
      </Box>
    ),
    tabsOnly: () => (
      <Box
        w={1}
        px={[40, 20]}
        pt={[20, 40]}
      >
        <TabFilter
          filterItems={filterItems}
          selectedFilterValue={selectedFilterValue}
          updateSelectedFilterValue={updateSelectedFilterValue}
        />
      </Box>
    ),
  };
  return types[type]();
};

ResponsiveFilter.propTypes = {
  filterItems: PropTypes.arrayOf(PropTypes.object),
  selectedFilterValue: PropTypes.string,
  updateSelectedFilterValue: PropTypes.func,
  type: PropTypes.oneOf([
    'both',
    'selectOnly',
    'tabsOnly',
  ]),
};

ResponsiveFilter.defaultProps = {
  type: 'both',
};

export default ResponsiveFilter;
