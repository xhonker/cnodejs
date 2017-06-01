import { combineReducers } from 'redux';
import main from './main';
import details from './details'
const reducers = combineReducers({
    main,
    details
});

export default reducers;