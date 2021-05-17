import React from 'react';

//STYLED COMPONENTS IMPORT
import {
  HomePageWrapper,
  HomePageAboutContainer,
  HomePagePortfolioContainer,
  HomePageContactContainere,
} from './home-page.styles';

const HomePage = () => (
  <HomePageWrapper>
    <HomePageAboutContainer></HomePageAboutContainer>
    <HomePagePortfolioContainer></HomePagePortfolioContainer>
    <HomePageContactContainere></HomePageContactContainere>
  </HomePageWrapper>
);

export default HomePage;
