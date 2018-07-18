import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Provider } from 'react-redux';
import store from './ducks/store';
import App from './App';
import { injectGlobal } from 'styled-components'

injectGlobal`
@import url('https://fonts.googleapis.com/css?family=Montserrat:800');
`

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>

    , document.getElementById('root'));

