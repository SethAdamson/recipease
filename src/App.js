import React, { Component } from 'react';
import { HashRouter, withRouter } from 'react-router-dom';
import routes from './routes';
import Menu from './components/fixed/Menu';
import Header from './components/fixed/Header';
import styled from 'styled-components';

const AppPage = styled.div`
background: #E7E2DC;
`

class App extends Component {
  render() {
    return (
      // <HashRouter>
      <AppPage>
        <Header count={1} />
        <Menu />
        {routes}
      </AppPage>
      // </HashRouter>
    );
  }
}

export default App;
