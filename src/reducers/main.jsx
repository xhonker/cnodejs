let initState = {
    hidden: false,
    item: []
}

const main = (state = initState, action) => {
    let newState = {};
    switch (action.type) {
        case 'test':
            newState = { hidden: !state.hidden, text: action.text };
            return Object.assign({}, state, newState);
        case 'testSyncAciton':
            return {
                ...state,
                item: action.data
            }
        default: return state;
    }
}

export default main;