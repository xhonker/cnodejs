/*
 * @Author: Quicker 
 * @Date: 2017-11-22 09:48:55 
 * @Last Modified by: Quicker
 * @Last Modified time: 2017-11-22 09:58:13
 */

export default function creacteReducer(initState, handlers) {
  return function reducer(state = initState, action) {
    if (Object.hasOwnProperty.call(handlers, action.type)) {
      if (action.error) return state.set('error', action.payload);
      if (action.fail) return state.set('fail', action.payload);
      return handlers[action.type](state, action);
    }
    return state;
  };
}