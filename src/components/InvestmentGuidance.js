import React from 'react';
import {
  ExtendedBox,
  ExtendedFlex,
  Heading,
  Body,
  Link,
} from '../';
import image from '../assets/guidance_bg.jpg';

const InvestmentGuidance = () => {
  return (
    <ExtendedBox
      w={1}
      bg="brown"
      height={['100vh', '50vh']}
      bgImage={image}
      bgRepeat="no-repeat"
      bgSize="cover"
      bgPosition="center center"
    >
      <ExtendedFlex
        height="100%"
        flexDirection="column"
        justify="center"
        align="center"
        px={[20, 40, 60]}
      >
        <Heading
          type="H2"
          color="white"
          textAlign="center"
          m={0}
          display="block"
          w={[300, 1]}
        >
          Need some investment guidance?
        </Heading>
        <Body
          type="B1"
          color="white"
          display="block"
          textAlign="center"
          w={[300, 400, 670]}
          mb={[40, 20]}
        >
          Our calculator will help you determine the best real estate allocation
          for your portfolio and investment considerations based on your risk tolerance.
        </Body>
        <Link
          m={0}
          type="L2"
        >
          Get Started
        </Link>
      </ExtendedFlex>
    </ExtendedBox>
  );
};

export default InvestmentGuidance;
