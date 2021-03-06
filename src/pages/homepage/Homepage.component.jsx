import React from 'react';
import Directory from '../../components/directory/Directory.component ';
import { HomePageContainer } from './Homepage.styles';
import './Homepage.styles.scss';

const HomePage = () => (
  <HomePageContainer>
    <h1>Welcome to my Homepage</h1>
    <Directory />
  </HomePageContainer>
);

export default HomePage;
