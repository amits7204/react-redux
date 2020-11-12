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

const getSearchResult = (query) => (dispatch) => {
  console.log("PAYLOAD Search: ", query);
  dispatch(searchPostRequest());
  axios
    .post(
      `https://developers.zomato.com/api/v2.1/search`,
      {
        params: { q: query },
      },
      {
        headers: {
          "user-key": "d287b59cbddc255b35b51f672d8e8492",
          "content-type": "application/json",
        },
      }
    )
    .then((res) => res.data)
    .then((res) => dispatch(searchPostSuccess(res)))
    .catch((err) => dispatch(searchPostFauiluier(err)));
};

export { getSearchResult };
