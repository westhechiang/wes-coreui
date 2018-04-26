import React from 'react';
import PropTypes from 'prop-types';
import Sensor from 'react-visibility-sensor';

class VisibilitySensor extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(isVisible) {
    this.props.callback(isVisible, this.props.param);
  }

  render() {
    const { offset } = this.props;

    return (
      <Sensor
        onChange={this.handleChange}
        offset={offset}
        scrollDelay={150}
        delayedCall
        scrollCheck
      />
    );
  }
}

VisibilitySensor.propTypes = {
  callback: PropTypes.func,
  param: PropTypes.string,
  offset: PropTypes.object,
};

export default VisibilitySensor;
