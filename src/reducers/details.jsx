let initState = {
    data: {},
    isFeching: false
};
const details = (state = initState, action) => {
    let newState;
    switch (action.type) {
        case 'REQUEST_DETAILS':
            state.isFeching = true;
            state.data = {};
            return Object.assign({}, state);
        case 'RECEIVE_DETAILS':
            newState = { data: action.data, isFeching: false };
            return Object.assign({}, state, newState);
        default: return state;
    }
}
export default details;