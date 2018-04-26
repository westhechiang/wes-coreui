import React from 'react';
import PropTypes from 'prop-types';
import {
  Select,
  Box,
  Flex,
} from '../../';

const SelectFilter = ({
  filterItems,
  selectedFilterValue,
  updateSelectedFilterValue,
}) => {
  return (
    <Flex
      justify="center"
      align="center"
    >
      <Box
        width={275}
      >
        <Select
          clearable={false}
          searchable={false}
          simpleValue
          options={filterItems.map((label) => {
            if (!label.count) {
              return label;
            }
            return {
              ...label,
              label: `${label.label} (${label.count})`,
            };
          })}
          onChange={updateSelectedFilterValue}
          value={selectedFilterValue}
        />
      </Box>
    </Flex>
  );
};

SelectFilter.propTypes = {
  filterItems: PropTypes.arrayOf(PropTypes.object),
  selectedFilterValue: PropTypes.string,
  updateSelectedFilterValue: PropTypes.func,
};

export default SelectFilter;
