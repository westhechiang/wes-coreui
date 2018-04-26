import React from 'react';
import PropTypes from 'prop-types';

import {
  ExtendedFlex,
  Box,
  Flex,
  Heading,
  Link,
  VisibilitySensor,
  OptionDropdown,
} from '../';

class UnlockOpportunities extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dropdown1: {
        id: 'dropdown1',
        isActive: false,
        value: 'Passive Income',
        options: [
          'Passive Income',
          'Capital Preservation',
          'Growth',
          '1031 Exchange',
          'Other',
        ],
      },
      dropdown2: {
        id: 'dropdown2',
        isActive: false,
        value: 'Conservative',
        options: [
          'Conservative',
          'Moderate',
          'Aggressive',
        ],
      },
      isVisible: false,
    };

    this.dropdownClickHandler = this.dropdownClickHandler.bind(this);
    this.handleSensorChange = this.handleSensorChange.bind(this);
    this.reset = this.reset.bind(this);
  }

  dropdownClickHandler(e) {
    const value = e.target.getAttribute('value');
    const target = e.target.getAttribute('id');
    // Whether open or closed, clicking should toggle dropdown in other direction.
    this.setState({
      [target]: {
        ...this.state[target],
        isActive: !this.state[target].isActive,
        value,
      },
    });
  }

  reset(e) {
    if (!Object.keys(this.state).includes(e.target.id)) {
      this.setState({
        dropdown1: {
          ...this.state.dropdown1,
          isActive: false,
        },
        dropdown2: {
          ...this.state.dropdown2,
          isActive: false,
        },
      });
    }
  }

  handleSensorChange(isVisible) {
    if (isVisible) {
      this.setState({
        isVisible,
      });
    }
  }

  render() {
    const {
      dropdown1,
      dropdown2,
      isVisible,
    } = this.state;

    const {
      isLoggedIn,
    } = this.props;

    return isLoggedIn ?
      null :
      <Box
        bg="black"
        w={1}
        py={[100, 100, 100, 160, 220]}
        onClick={this.reset}
      >
        <Flex
          flexDirection="column"
          align="center"
        >
          <Heading
            type="H9"
            color="white"
            display="block"
            textAlign="center"
            textTransform="uppercase"
            mx={20}
            opacity={isVisible ? '1' : '0'}
            transition={`
              opacity 0.5s ${!isVisible ? '0' : '0.3'}s linear
            `}
          >
            Unlock Exclusive Opportunities Today.
          </Heading>
          <VisibilitySensor
            callback={this.handleSensorChange}
          />
          <Box
            my={50}
          >
            <ExtendedFlex
              flexDirection={['column', 'column', 'column', 'row', 'row']}
              align="center"
              mb={[20, 30, 40, 40, 60]}
              opacity={isVisible ? '1' : '0'}
              transition={`
                opacity 0.5s ${!isVisible ? '0' : '0.6'}s linear
              `}
            >
              <Flex
                flexDirection={['column', 'row', 'row', 'row', 'row']}
                align="center"
                mr={[0, 0, 0, 40, 80]}
                mb={[40, 40, 40, 0]}
              >
                <Heading
                  type="H5"
                  color="white"
                  mr={[null, 10]}
                  mb={[10, null]}
                >
                  I Want
                </Heading>
                <OptionDropdown
                  width={[190, 190, 210, 240, 300]}
                  zIndex="2"
                  {...dropdown1}
                  handleClick={this.dropdownClickHandler}
                />
              </Flex>
              <Flex
                flexDirection={['column', 'row', 'row', 'row', 'row']}
                align="center"
                mb={0}
              >
                <Heading
                  type="H5"
                  color="white"
                  mr={[null, 10]}
                  mb={[10, null]}
                >
                  My Risk Tolerance Is
                </Heading>
                <OptionDropdown
                  width={[140, 140, 150, 170, 220]}
                  zIndex="1"
                  {...dropdown2}
                  handleClick={this.dropdownClickHandler}
                />
              </Flex>
            </ExtendedFlex>
          </Box>
          <Link
            type="L2"
            href="/user/register"
            opacity={isVisible ? '1' : '0'}
            transition={`
              opacity 0.5s ${!isVisible ? '0' : '0.9'}s linear
            `}
          >
            Join Now
          </Link>
        </Flex>
      </Box>;
  }
}

UnlockOpportunities.propTypes = {
  isLoggedIn: PropTypes.bool.isRequired,
};

export default UnlockOpportunities;
