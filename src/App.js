import React, { Component } from 'react';
import { HashRouter, withRouter } from 'react-router-dom';
import routes from './routes';
import { ParallaxProvider } from 'react-scroll-parallax';
import Menu from './components/fixed/Menu';
import Header from './components/fixed/Header';
import styled from 'styled-components';

const AppPage = styled.div`
background: #E7E2DC;
scroll-behavior: smooth;
font-family: 'Playfair Display', serif;
`

class App extends Component {
  render() {
    return (
      // <HashRouter>
      <ParallaxProvider>
        <AppPage>
          {/* <Menu /> */}
          {routes}
        </AppPage>
      </ParallaxProvider>
      // </HashRouter>
    );
  }
}

export default App;
