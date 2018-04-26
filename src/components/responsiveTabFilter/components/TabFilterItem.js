import React from 'react';
import PropTypes from 'prop-types';

import {
  ExtendedBox,
  Link,
  Span,
} from '../../../';

class TabFilterItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};

    this.handleMouseEnter = this.handleMouseEnter.bind(this);
    this.handleMouseLeave = this.handleMouseLeave.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleMouseEnter() {
    this.props.handleMouseEnter(this.props.label.value);
  }

  handleClick() {
    this.props.handleClick(this.props.label.value);
  }

  render() {
    const {
      handleMouseLeave,
      isActive,
      label,
    } = this.props;

    return (
      <ExtendedBox
        key={label.value}
        onMouseEnter={this.handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        mr={20}
        px={15}
        pb={5}
        w={[1, 'auto']}
      >
        <Link
          type="L5"
          color="gray.8"
          textAlign={['center', 'left']}
          display="block"
          py={10}
          id={label.value}
          onClick={this.handleClick}
        >
          { label.label }
          {
            typeof label.count !== 'undefined' && label.count !== null &&
            <Span>
              {` (${label.count})`}
            </Span>
          }
        </Link>
        <ExtendedBox
          w={1}
          height="1px"
          bg="gray.8"
          opacity={isActive ? '1' : '0'}
          transition="opacity 0.3s linear"
        />
      </ExtendedBox>
    );
  }
}

TabFilterItem.propTypes = {
  handleClick: PropTypes.func,
  handleMouseEnter: PropTypes.func,
  handleMouseLeave: PropTypes.func,
  label: PropTypes.object,
  isActive: PropTypes.bool,
};

export default TabFilterItem;
