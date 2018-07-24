import React, { Component } from 'react';
import { HashRouter, withRouter } from 'react-router-dom';
import routes from './routes';
import { ParallaxProvider } from 'react-scroll-parallax';
import Menu from './components/fixed/Menu';
import Header from './components/fixed/Header';
import styled from 'styled-components';

const AppPage = styled.div`
background: rgb(210, 210, 210);
`

class App extends Component {
  render() {
    return (
      // <HashRouter>
      <ParallaxProvider>
        <div className="App">
          <Header count={1} />
          <Menu />
          {routes}
        </div>
      </ParallaxProvider>
      // </HashRouter>
    );
  }
}

export default App;
