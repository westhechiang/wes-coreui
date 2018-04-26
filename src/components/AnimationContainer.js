import React from 'react';
import PropTypes from 'prop-types';

import { Animation } from '../';
import { whichStartEvent, whichEndEvent } from '../helpers/style';


class AnimationContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.setAnimationLifeCycle = this.setAnimationLifeCycle.bind(this);
  }

  componentDidMount() {
    this.setAnimationLifeCycle(this.animation);
  }

  setAnimationLifeCycle(ref) {
    if (ref) {
      const { onStart, onEnd } = this.props;

      ref.addEventListener(whichStartEvent(), onStart);
      ref.addEventListener(whichEndEvent(), onEnd);
    }
  }

  render() {
    const {
      children,
      name,
      duration,
      timing,
      fillMode,
      delay,
      noAnimate,
    } = this.props;

    if (noAnimate) {
      return (
        <React.Fragment>
          {children}
        </React.Fragment>
      )
    }

    const animationProps = {
      name,
      duration,
      timing,
      fillMode,
      delay,
    };

    return (
      <Animation
        innerRef={(animation) => { this.animation = animation; }}
        {...animationProps}
      >
        {children}
      </Animation>
    );
  }
}

AnimationContainer.propTypes = {
  children: PropTypes.any,
  name: PropTypes.string,
  duration: PropTypes.string,
  timing: PropTypes.string,
  fillMode: PropTypes.string,
  delay: PropTypes.string,
  onStart: PropTypes.func,
  onEnd: PropTypes.func,
  noAnimate: PropTypes.bool,
};

export default AnimationContainer;
