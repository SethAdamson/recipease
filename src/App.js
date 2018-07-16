import React, { Component } from '../../../../AppData/Local/Microsoft/TypeScript/2.9/node_modules/@types/react';
import { HashRouter, withRouter } from '../../../../AppData/Local/Microsoft/TypeScript/2.9/node_modules/@types/react-router-dom';
import routes from './routes';
import Menu from './components/fixed/Menu';
import Header from './components/fixed/Header';
import './App.css';

class App extends Component {
  render() {
    return (
      <HashRouter>
        <div className="App">
          <Header />
          <Menu />
          {routes}
        </div>
      </HashRouter>
    );
  }
}

export default withRouter(App);
