import React from 'react';
import PropTypes from 'prop-types';

import  {
  LoaderCore,
} from '../';

const Loader = (props) => {
  const {
    width,
    height,
    frontColor,
    backColor,
    children,
  } = props;

  return (
    <LoaderCore.Wrapper>
      <LoaderCore.Div
        {
          ...{
            width,
            height,
          }
        }
      >
        <LoaderCore.Flipper>
          <LoaderCore.Front bg={frontColor} />
          <LoaderCore.Back bg={backColor} />
        </LoaderCore.Flipper>
      </LoaderCore.Div>
      {
        children &&
        <LoaderCore.ChildrenWrapper
          mt={height + 40}
          textAlign="center"
        >
          { children }
        </LoaderCore.ChildrenWrapper>
      }
    </LoaderCore.Wrapper>
  );
};

Loader.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
  frontColor: PropTypes.string,
  backColor: PropTypes.string,
};

Loader.defaultProps = {
  width: 25,
  height: 25,
  frontColor: "blue.1",
  backColor: "gray.8",
};

export default Loader;
