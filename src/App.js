import React, { Component } from 'react';
import { HashRouter, withRouter } from 'react-router-dom';
import routes from './routes';
import Menu from './Components/fixed/Menu';
import Header from './Components/fixed/Header';
import './App.css';

class App extends Component {
  render() {
    return (
      // <HashRouter>
      <div className="App">
        <Header />
        <Menu />
        {routes}
      </div>
      // </HashRouter>
    );
  }
}

export default App;
