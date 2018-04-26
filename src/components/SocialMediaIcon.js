import React from 'react';
import PropTypes from 'prop-types';
import {
  SocialMediaIconBase,
} from '../';

import TwitterIcon from '../assets/social_twitter.svg';
import YoutubeIcon from '../assets/social_youtube.svg';
import LinkedInIcon from '../assets/social_linkedin.svg';
import InstagramIcon from '../assets/social_ig.svg';
import FacebookIcon from '../assets/social_fb.svg';

export const socialMediaIcons = {
  twitter: TwitterIcon,
  facebook: FacebookIcon,
  youtube: YoutubeIcon,
  linkedin: LinkedInIcon,
  instagram: InstagramIcon,
};

const SocialMediaIcon = ({ icon, url }) => {
  return (
    <SocialMediaIconBase
      bgImage={socialMediaIcons[icon]}
      bgRepeat="no-repeat"
      bgPosition="center center"
      bgSize="auto 18px"
      w={25}
      height={20}
      href={url}
      ml={5}
    />
  );
};

SocialMediaIcon.propTypes = {
  icon: PropTypes.oneOf([
    'twitter',
    'youtube',
    'facebook',
    'instagram',
    'linkedin',
  ]),
  url: PropTypes.string,
};

export default SocialMediaIcon;
