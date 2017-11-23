import axios from "axios";
import {
  MAIN_DATA,
  REQUEST_STATE,
  SET_SCROLL
} from "../constActionTypes/mainActionTypes";
import { GET_DETAILS } from "../constActionTypes/detailsActionTypes";
const test = () => ({
  type: "test"
});
const setScroll = scrollTop => ({
  type: SET_SCROLL,
  scrollTop
});
const getTopicData = (data, tab, limit) => ({
  type: MAIN_DATA,
  data,
  tab,
  limit
});
const AjaxTopicRequest = {
  type: REQUEST_STATE
};
const SyncAction = (tab, limit = 20) => {
  return dispath => {
    dispath(AjaxTopicRequest);
    axios
      .get(`https://cnodejs.org/api/v1/topics?tab=${tab}&page=1&limit=${limit}`)
      .then(req => {
        dispath(getTopicData(req.data.data, tab, limit));
      })
      .catch(error => {
        console.log(error);
      });
  };
};

const request_details_action = {
  type: REQUEST_STATE
};
const receive_datails = data => ({
  type: GET_DETAILS,
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
