import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import './styles/index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
//Reducers
import counterApp from './reducers'
//Redux
import { createStore } from 'redux';

const store = createStore(counterApp, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

ReactDOM.render(
    <Provider store={store}>            
        <App />
    </Provider>
    , document.getElementById('root'));
registerServiceWorker();
