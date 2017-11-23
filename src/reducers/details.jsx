/*
 * @Author: Quicker 
 * @Date: 2017-11-22 14:04:09 
 * @Last Modified by: Quicker
 * @Last Modified time: 2017-11-22 14:21:44
 */
import { Map, List } from "immutable";
import createReducer from "../utils/createReducer";
import { GET_DETAILS } from "../constActionTypes/detailsActionTypes";
import { REQUEST_STATE } from "../constActionTypes/mainActionTypes";
let initState = Map({
    data: List,
    isFeching: false
});
const details = createReducer(initState, {
    [GET_DETAILS](state, action) {
        return state.set('data', action.data);
    },
    [REQUEST_STATE](state, action) {
        return state.set('isFeching', true);
    }
});
export default details;