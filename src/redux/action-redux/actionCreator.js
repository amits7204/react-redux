import {
  SEARCH_POST_REQUEST,
  SEARCH_POST_SUCCESS,
  SEARCH_POST_FAULIER,
} from "../action-redux/actionType";

import axios from "axios";

const searchPostRequest = (payload) => {
  return { type: SEARCH_POST_REQUEST, payload };
};

const searchPostSuccess = (payload) => {
  return { type: SEARCH_POST_SUCCESS, payload };
};

const searchPostFauiluier = (payload) => {
  return { type: SEARCH_POST_FAULIER, payload };
};

const getSearchResult = (payload) => (dispatch) => {
  console.log("PAYLOAD Search: ", payload.item);
  dispatch(searchPostRequest());

  // params.append("q", query);
  // params.append("sort", "rating");
  // params.append("order", "desc");
  // let request = {
  //   params: { q: query, sort: "rating", order: "desc" },
  // };
  axios({
    url: "https://developers.zomato.com/api/v2.1/search",
    method: "get",
    params: {
      q: payload.item,
      order: payload.order,
      sort: payload.sort,
      start: payload.offset,
      count: payload.count,
    },
    headers: {
      "user-key": "d287b59cbddc255b35b51f672d8e8492",
    },
  })
    // .get(
    //   "https://developers.zomato.com/api/v2.1/search",
    //   { params: { q: query } },
    //   {
    //     headers: {
    //       "user-key": `d287b59cbddc255b35b51f672d8e8492`,
    //     },
    //   }
    // )
    .then((res) => res.data)
    .then((res) => dispatch(searchPostSuccess(res)))
    .catch((err) => dispatch(searchPostFauiluier(err)));
};

export { getSearchResult };
