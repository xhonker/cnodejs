// import { combineReducers } from 'redux';
import { combineReducers } from "redux-immutable";
import main from './main';
import details from './details'
const reducers = combineReducers({
    main,
    details
});

export default reducers;