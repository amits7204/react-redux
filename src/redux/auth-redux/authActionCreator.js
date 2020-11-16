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
    .post("https://reqres.in/api/login/", {
      email: payload.email,
      password: payload.password,
    })
    .then((res) => res.data)
    .then((res) => dispatch(loginPostSuccess(res)))
    .catch((err) => dispatch(loginPostFauiluier(err)));
};

export { getLoginAuth };
