import React, { Component } from 'react';
import { HashRouter, withRouter } from 'react-router-dom';
import routes from './routes';
import Menu from './components/fixed/Menu';
import Header from './components/fixed/Header';

class App extends Component {
  render() {
    return (
      <HashRouter>
        <div>
          <Header />
          <Menu />
          {routes}
        </div>
      </HashRouter>
    );
  }
}

export default App;
