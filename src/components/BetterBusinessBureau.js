import React from 'react';
import {
  SocialMediaIconBase,
  TextLink,
} from '../';

import bgImage from '../assets/bbb_rating.png';

const BetterBusinessBureau = () => {
  return (
    <TextLink
      href="#"
      target="_blank"
      m={0}
    >
      <SocialMediaIconBase
        bgImage={bgImage}
        bgRepeat="no-repeat"
        bgPosition="center center"
        bgSize="contain"
        height={[50, 70]}
        w={[60, 100]}
      />
    </TextLink>
  );
};

export default BetterBusinessBureau;
