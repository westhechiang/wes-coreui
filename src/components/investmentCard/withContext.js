import React from 'react';

const withContext = (
  InvestmentCardContainer,
  InvestmentCardStatus,
  InvestmentCardImage,
  Section1,
  Section2,
  Section3,
  Section4,
  Section5,
  Section6,
  Section7,
) => {
  const InvestmentCardWithContext = () => {
    return (
      <InvestmentCardContainer>
        <InvestmentCardImage />
        { InvestmentCardStatus() }
        { Section1() }
        { Section2() }
        { Section3() }
        { Section4() }
        { Section5() }
        { Section6() }
        { Section7() }
      </InvestmentCardContainer>
    );
  };

  return InvestmentCardWithContext();
};

export default withContext;
