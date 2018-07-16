import React from '../../../../AppData/Local/Microsoft/TypeScript/2.9/node_modules/@types/react';
import ReactDOM from '../../../../AppData/Local/Microsoft/TypeScript/2.9/node_modules/@types/react-dom';
import './index.css';
import {Provider} from 'react-redux';
import store from './ducks/store';
import App from './App';

ReactDOM.render(
<Provider store={store}>
    <App />
</Provider>

, document.getElementById('root'));

