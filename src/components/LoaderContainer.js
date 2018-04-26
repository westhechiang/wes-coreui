import React from 'react';

import {
  Loader,
  LoaderCore,
} from '../';

class LoaderContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const {
      children,
      ...additionalProps
    } = this.props;

    const loader = !children ? <Loader /> : children;

    return (
      <LoaderCore.ContainerDiv { ...additionalProps }>
        { loader }
      </LoaderCore.ContainerDiv>
    );
  }
}

export default LoaderContainer;
