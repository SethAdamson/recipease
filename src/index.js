import React from 'react';
import ReactDOM from 'react-dom';
import dotenv from 'dotenv';
import './index.css';
import { Provider } from 'react-redux';
import store from './ducks/store';
import App from './App';
import { HashRouter } from 'react-router-dom'

ReactDOM.render(
    <Provider store={store}>
        <HashRouter>
            <App />
        </HashRouter>
    </Provider>

    , document.getElementById('root'));

