import axios from "axios";

const test = () => ({
  type: "test"
});
const setScroll = scrollTop => ({
  type: "SET_SCROLL",
  scrollTop
});
const testSyncAction = (data, tab, limit) => ({
  type: "testSyncAciton",
  data,
  tab,
  limit
});
const AjaxTopicRequest = {
  type: "AjaxTopicRequest"
};
const SyncAction = (tab, limit = 20) => {
  return dispath => {
    dispath(AjaxTopicRequest);
    axios
      .get(`https://cnodejs.org/api/v1/topics?tab=${tab}&page=1&limit=${limit}`)
      .then(req => {
        dispath(testSyncAction(req.data.data, tab, limit));
      })
      .catch(error => {
        console.log(error);
      });
  };
};

const request_details_action = {
  type: "REQUEST_DETAILS"
};
const receive_datails = data => ({
  type: "RECEIVE_DETAILS",
  data
});
const request_details = id => {
  return dispacth => {
    dispacth(request_details_action);
    axios
      .get(`https://cnodejs.org/api/v1/topic/${id}`)
      .then(req => {
        dispacth(receive_datails(req.data.data));
      })
      .catch(error => {
        console.log(error);
      });
  };
};

export { test, SyncAction, request_details, setScroll };
