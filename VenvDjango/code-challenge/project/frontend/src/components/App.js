import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import MainPage from './MainPage';
import LandingPage from './LandingPage';

import { Provider } from 'react-redux';
import store from '../store';

export default function App() {
  return(
    <Provider store={store}>
      <React.Fragment>
        <MainPage />
        <LandingPage />
      </React.Fragment>
    </Provider> 
  )
}

ReactDOM.render(<App />, document.getElementById('app'));