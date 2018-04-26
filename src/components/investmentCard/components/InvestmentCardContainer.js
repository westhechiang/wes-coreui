import React from 'react';
import PropTypes from 'prop-types';
import {
  ExtendedFlex,
  AnimationContainer,
  Tooltip,
  Body,
} from '../../../';

class InvestmentCardContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const {
      children,
      zIndex,
      fadeIndex,
      reit,
      id,
      payoutTooltip,
      distributionTooltip,
      height,
      noAnimate,
    } = this.props;

    return (
      <AnimationContainer
        name="fadeIn"
        duration="1s"
        delay={`${fadeIndex / 5}s`}
        fillMode="backwards"
        noAnimate={noAnimate}
      >
        {
          reit && payoutTooltip &&
          <Tooltip id={`${id}_3x_position_2`}>
            <Body
              type="B5"
              m={0}
              color="gray.8"
            >
              { payoutTooltip }
            </Body>
          </Tooltip>
        }
        {
          reit && distributionTooltip &&
          <Tooltip id={`${id}_3x_position_3`}>
            <Body
              type="B5"
              m={0}
              color="gray.8"
            >
              { distributionTooltip }
            </Body>
          </Tooltip>
        }
        <ExtendedFlex
          w={[315, 315, 315, 400, 525]}
          height={height}
          position="relative"
          p={10}
          mx={4}
          mt={30}
          bg="white"
          flexDirection="column"
          transition="box-shadow 0.3s linear"
          hoverShadow
          hoverRemoveFilter
          zIndex={zIndex}
        >
          { children }
        </ExtendedFlex>
      </AnimationContainer>
    );
  }
}

InvestmentCardContainer.propTypes = {
  id: PropTypes.number,
  children: PropTypes.any,
  fadeIndex: PropTypes.number,
  zIndex: PropTypes.string,
  payoutTooltip: PropTypes.string,
  distributionTooltip: PropTypes.string,
  reit: PropTypes.bool,
  height: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.array,
  ]),
  noAnimate: PropTypes.bool,
};

InvestmentCardContainer.defaultProps = {
  distributionTooltip: 'Placeholder distribution Tooltip',
  payoutTooltip: 'Placeholder payout Tooltip',
  noAnimate: false,
};

export default InvestmentCardContainer;
