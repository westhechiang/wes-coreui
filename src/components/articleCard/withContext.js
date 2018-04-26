import React from 'react';

const withContext = (
  ArticleCardContainer,
  ArticleCardType,
  ArticleCardImage,
  Section1,
  Section2,
  Section5,
  Section7,
) => {
  const ArticleCardWithContext = () => {
    return (
      <ArticleCardContainer>
        <ArticleCardType />
        <ArticleCardImage />
        { Section1() }
        { Section2() }
        { Section5() }
        { Section7() }
      </ArticleCardContainer>
    );
  };

  return ArticleCardWithContext();
};

export default withContext;
