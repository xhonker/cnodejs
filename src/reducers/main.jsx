const initState = {
    isFetching: false,
    item: [],
    tab: 'all'
}
const main = (state = initState, action) => {
    let newState = {};
    switch (action.type) {
        case 'test':
            newState = { hidden: !state.hidden, text: action.text };
            return Object.assign({}, state, newState);
        case 'testSyncAciton':
            newState = { item: action.data, isFetching: false, tab: action.tab, limit: action.limit }
            return Object.assign({}, state, newState)
        case 'AjaxTopicRequest':
            newState = { isFetching: true }
            return Object.assign({}, state, newState)
        default: return state;
    }
}

export default main;