import React from 'react';
import PropTypes from 'prop-types';
import {
  ExtendedFlex,
  Flex,
} from '../../../';

import TabFilterItem from './TabFilterItem';

class TabFilter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hoveredFilterValue: '',
    };

    this.handleMouseEnter = this.handleMouseEnter.bind(this);
    this.handleMouseLeave = this.handleMouseLeave.bind(this);
  }

  handleMouseEnter(labelValue) {
    this.setState({
      hoveredFilterValue: labelValue,
    });
  }

  handleMouseLeave() {
    this.setState({
      hoveredFilterValue: '',
    });
  }

  render() {
    const {
      filterItems,
      selectedFilterValue,
      updateSelectedFilterValue,
    } = this.props;

    const {
      hoveredFilterValue,
    } = this.state;

    return (
      <ExtendedFlex
        borderBottom={1}
        borderColor="gray.7"
        justify="center"
        pb={40}
        w={1}
      >
        <Flex>
          {
            filterItems.map(
              (label) => {
                const isActive = label.value === selectedFilterValue ||
                  label.value === hoveredFilterValue;
                return (
                  <TabFilterItem
                    isActive={isActive}
                    label={label}
                    handleClick={updateSelectedFilterValue}
                    handleMouseEnter={this.handleMouseEnter}
                    handleMouseLeave={this.handleMouseLeave}
                  />
                );
              },
            )
          }
        </Flex>
      </ExtendedFlex>
    );
  }
}

TabFilter.propTypes = {
  filterItems: PropTypes.arrayOf(PropTypes.object),
  selectedFilterValue: PropTypes.string,
  updateSelectedFilterValue: PropTypes.func,
};

export default TabFilter;
