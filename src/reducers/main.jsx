/*
 * @Author: Quicker 
 * @Date: 2017-11-22 14:21:41 
 * @Last Modified by: Quicker
 * @Last Modified time: 2017-11-22 14:57:37
 */

import { Map, List } from "immutable";
import createReducer from "../utils/createReducer";
import {
  MAIN_DATA,
  REQUEST_STATE,
  SET_SCROLL
} from "../constActionTypes/mainActionTypes";
const initState = Map({
  isFetching: false,
  item: List,
  tab: 'all',
  scroll: 0
});
const main = createReducer(initState, {
  [MAIN_DATA](state, action) {
    return state.set('item', action.data)
      .set('isFetching', false)
      .set('tab', action.tab)
      .set('limit', action.limit)
      // .set('scroll', 0);
  },
  [REQUEST_STATE](state, action) {
    return state.set('isFetching', true);
  },
  [SET_SCROLL](state, action) {
    return state.set('scroll', action.scrollTop);
  }

});

export default main;
