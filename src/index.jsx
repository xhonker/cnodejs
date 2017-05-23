import React from 'react';
import ReactDOM, { render } from 'react-dom';
import { createLogger } from 'redux-logger';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import reducers from './reducers/index';

import Main from './containers/index';

const appDOM = document.body.appendChild(document.createElement('div'));
const middleware = [thunk];

middleware.push(createLogger());

const store = createStore(reducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(), applyMiddleware(...middleware));

render(
    <Provider store={store}>
        <Main />
    </Provider>, appDOM
);