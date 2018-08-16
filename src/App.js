import React, { Component } from 'react';
import { HashRouter, withRouter } from 'react-router-dom';
import routes from './routes';
import { ParallaxProvider } from 'react-scroll-parallax';
import styled from 'styled-components';

const AppPage = styled.div`
/* background: #E7E2DC; */
scroll-behavior: smooth;
font-family: 'Playfair Display', serif;
margin: 0;
padding: 0;
width: 100%;
`

class App extends Component {
  render() {
    return (
      // <HashRouter>
      <ParallaxProvider>
        <AppPage>
          {routes}
        </AppPage>
      </ParallaxProvider>
      // </HashRouter>
    );
  }
}

export default App;
