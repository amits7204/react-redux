import {
  LOGIN_POST_REQUEST,
  LOGIN_POST_SUCCESS,
  LOGIN_POST_FAULIER,
} from "../auth-redux/authActionType";

import axios from "axios";

const loginPostRequest = (payload) => {
  return { type: LOGIN_POST_REQUEST, payload };
};

const loginPostSuccess = (payload) => {
  return { type: LOGIN_POST_SUCCESS, payload };
};

const loginPostFauiluier = (payload) => {
  return { type: LOGIN_POST_FAULIER, payload };
};

const getLoginAuth = (payload) => (dispatch) => {
  console.log("PAYLOAD: ", payload);
  dispatch(loginPostRequest());
  axios
    .get(
      "https://developers.zomato.com/api/v2.1/search",
      {
        param: { payload },
      },
      {
        "Content-Type": "application/json",
        "user-key": "d287b59cbddc255b35b51f672d8e8492",
      }
    )
    .then((res) => res.data)
    .then((res) => dispatch(loginPostSuccess(res)))
    .catch((err) => dispatch(loginPostFauiluier(err)));
};

export { getLoginAuth };
