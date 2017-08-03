const initState = {
  isFetching: false,
  item: [],
  tab: "all",
  scroll: 0
};
const main = (state = initState, action) => {
  let newState = {};
  switch (action.type) {
    case "test":
      newState = { hidden: !state.hidden, text: action.text };
      return Object.assign({}, state, newState);
    case "testSyncAciton":
      newState = {
        item: action.data,
        isFetching: false,
        tab: action.tab,
        limit: action.limit,
        scroll:0,
      };
      return Object.assign({}, state, newState);
    case "AjaxTopicRequest":
      newState = { isFetching: true };
      return Object.assign({}, state, newState);
    case "SET_SCROLL":
      newState = { scroll: action.scrollTop };
      return Object.assign({}, state, newState);
    default:
      return state;
  }
};

export default main;
