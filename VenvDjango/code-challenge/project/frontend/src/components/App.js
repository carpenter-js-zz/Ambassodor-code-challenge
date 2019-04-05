import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import MainPage from './MainPage';
import LandingPage from './LandingPage';

export default function App() {
  return(
    <React.Fragment>
      <MainPage />
      <LandingPage />
    </React.Fragment> 
  )
}

ReactDOM.render(<App />, document.getElementById('app'));