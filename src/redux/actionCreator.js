import {
  LOGIN_GET_REQUEST,
  LOGIN_GET_SUCCESSS,
  LOGIN_GET_FAUILUIER,
} from "./actionType";

import axios from "axios";

const loginGetRequest = (payload) => {
  return { type: LOGIN_GET_REQUEST, payload };
};

const loginGetSuccess = (payload) => {
  return { type: LOGIN_GET_SUCCESSS, payload };
};

const loginGetFauiluier = (payload) => {
  return { type: LOGIN_GET_FAUILUIER, payload };
};

const getLoginAuth = (payload) => (dispatch) => {
  console.log(payload);
  dispatch(loginGetRequest());
  axios
    .get("http://localhost:3000/login")
    .then((res) => res)
    .then((res) => dispatch(loginGetSuccess(res.data)))
    .catch((err) => dispatch(loginGetFauiluier(err)));
};
export { getLoginAuth };
