import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducer from '../reducers/index';

const middleware = [thunk];
//判断 如果是开发环境就启用redux-logger
if (process.env.NODE_ENV === 'development') { 
    const { createLogger } = require('redux-logger');
    middleware.push(createLogger());
}

const store = createStore(
    reducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
    applyMiddleware(...middleware)
);

export default store;