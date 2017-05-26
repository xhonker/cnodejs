import React from 'react';
import ReactDOM, { render } from 'react-dom';
import { Provider } from 'react-redux';
import store from './store/index';
import Router from './router/index';
const appDOM = document.body.appendChild(document.createElement('div'));

render(
    <Provider store={store}>
        {Router}
    </Provider>, appDOM
);