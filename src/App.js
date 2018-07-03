import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import BasicContainer from './Containers/BasicContainer';
import AppContainer from './Containers/AppContainer';

class App extends Component {
  render() {
    return (
      <section>
        <AppContainer />
        <BasicContainer />
      </section>
    );
  }
}

export default App;
