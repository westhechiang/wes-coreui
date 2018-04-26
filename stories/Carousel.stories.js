import React from 'react';
import { storiesOf } from '@storybook/react';

import {
  CarouselLarge,
  CarouselQuotes,
  CarouselRecentInvestments,
  Heading,
  ExtendedFlex,
  ExtendedBox,
  RecentInvestmentCard,
} from '../src';

// Generates nicely centered text friendly with carousel.
// INPUT1: str, whatever text is to be displayed
// OUTPUT: JSX, ready to be put into Carousel component to display text centered
// Note: Intended for consumption by CarouselLarge and CarouselQuotes.
const centeredTextForCarousel = (text) => {
  return (
    <ExtendedBox
      w="100%"
    >
      <ExtendedFlex
        align="center"
        justify="center"
        height="300px"
      >
        <Heading type="H2">
          {text}
        </Heading>
      </ExtendedFlex>
    </ExtendedBox>
  );
}

const cardBuilderForCarousel = (image) => {
  const longDescriptionIsLong = `Intended for display of Recent Investment Cards.
    Can navigate with arrows or by swipe. Autoplays 3s interval, pauses on arrow nav.`;
  return (
    <ExtendedBox
      mx={5}
    >
      <RecentInvestmentCard
        image={image}
        title="Property Name"
        location="City, State"
        propertyType="Totally Sweet"
        investmentType="Totally Rad"
        description={longDescriptionIsLong}
      />
    </ExtendedBox>
  );
};


const textsToShowInCarouselLarge = [
  'Large Carousel',
  'Displays single element with crossfades',
  'responsive, touch-enabled, dots clickable',
  'Accepts all children elements',
];

const textsToShowInCarouselQuotes = [
  'Quotes Carousel',
  'Autoplays, No nav arrows',
  'Otherwise same as Large',
];

const imageURLsToShowInCarouselRecentInvestments = [
  "https://www.placecage.com/c/492/264",
  "https://www.placecage.com/492/264",
  "https://www.fillmurray.com/492/264",
  "https://www.placecage.com/c/492/264",
  "https://www.placecage.com/492/264",
  "https://www.fillmurray.com/492/264",
  "https://www.placecage.com/c/492/264",
  "https://www.placecage.com/492/264",
  "https://www.fillmurray.com/492/264",
];


storiesOf('carousel', module)
  .add('CarouselLarge', () => (
    <CarouselLarge>
      {textsToShowInCarouselLarge.map(centeredTextForCarousel)}
    </CarouselLarge>
  ))
  .add('CarouselQuotes', () => (
    <CarouselQuotes>
      {textsToShowInCarouselQuotes.map(centeredTextForCarousel)}
    </CarouselQuotes>
  ))
  .add('CarouselRecentInvestments', () => (
    <CarouselRecentInvestments>
      {imageURLsToShowInCarouselRecentInvestments.map(cardBuilderForCarousel)}
    </CarouselRecentInvestments>
  ));
