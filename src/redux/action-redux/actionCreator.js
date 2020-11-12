import {
  SEARCH_POST_REQUEST,
  SEARCH_POST_SUCCESS,
  SEARCH_POST_FAULIER,
} from "../action-redux/actionType";

import axios from "axios";

const loginPostRequest = (payload) => {
  return { type: SEARCH_POST_REQUEST, payload };
};

const loginPostSuccess = (payload) => {
  return { type: SEARCH_POST_SUCCESS, payload };
};

const loginPostFauiluier = (payload) => {
  return { type: SEARCH_POST_FAULIER, payload };
};

const getSearchResult = (query) => (dispatch) => {
  console.log("PAYLOAD Search: ", query);
  dispatch(loginPostRequest());
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
    .then((res) => dispatch(loginPostSuccess(res)))
    .catch((err) => dispatch(loginPostFauiluier(err)));
};

export { getSearchResult };
