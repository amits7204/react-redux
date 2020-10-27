import {
  LOGIN_POST_REQUEST,
  LOGIN_POST_SUCCESSS,
  LOGIN_POST_FAUILUIER,
  COUNTRY_POST_REQUEST,
  COUNTRY_POST_SUCCESSS,
  COUNTRY_POST_FAUILUIER,
  CITY_POST_REQUEST,
  CITY_POST_SUCCESSS,
  CITY_POST_FAUILUIER,
  CITY_GET_REQUEST,
  CITY_GET_SUCCESSS,
  CITY_GET_FAUILUIER,
} from "./actionType";

import axios from "axios";

const loginPostRequest = (payload) => {
  return { type: LOGIN_POST_REQUEST, payload };
};

const loginPostSuccess = (payload) => {
  return { type: LOGIN_POST_SUCCESSS, payload };
};

const loginPostFauiluier = (payload) => {
  return { type: LOGIN_POST_FAUILUIER, payload };
};

const countryPostRequest = (payload) => {
  return { type: COUNTRY_POST_REQUEST, payload };
};

const countryPostSuccess = (payload) => {
  return { type: COUNTRY_POST_SUCCESSS, payload };
};

const countryPostFauiluier = (payload) => {
  return { type: COUNTRY_POST_FAUILUIER, payload };
};

const cityPostRequest = (payload) => {
  return { type: CITY_POST_REQUEST, payload };
};

const cityPostSuccess = (payload) => {
  return { type: CITY_POST_SUCCESSS, payload };
};

const cityPostFauiluier = (payload) => {
  return { type: CITY_POST_FAUILUIER, payload };
};

const cityGetRequest = (payload) => {
  return { type: CITY_GET_REQUEST, payload };
};

const cityGetSuccess = (payload) => {
  return { type: CITY_GET_SUCCESSS, payload };
};

const cityGetFauiluier = (payload) => {
  return { type: CITY_GET_FAUILUIER, payload };
};

const getLoginAuth = (payload) => (dispatch) => {
  console.log(payload);
  dispatch(loginPostRequest());
  axios
    .post("https://masai-api-mocker.herokuapp.com/auth/login", {
      username: payload.username,
      password: payload.password,
    })
    .then((res) => res.data)
    .then((res) => dispatch(loginPostSuccess(res)))
    .catch((err) => dispatch(loginPostFauiluier(err)));
};

const getCountryObj = (payload) => (dispatch) => {
  console.log("PAYLOAD; ", payload);
  dispatch(countryPostRequest(payload));
  axios
    .post("http://localhost:3000/country", {
      name: payload.cname,
    })
    .then((res) => console.log(res.data))
    .then((res) => dispatch(countryPostSuccess(res)))
    .catch((err) => dispatch(countryPostFauiluier(err)));
};
const postCityObj = (payload) => (dispatch) => {
  console.log("CITY PAYLOAD; ", payload);
  dispatch(cityPostRequest(payload));
  axios
    .post("http://localhost:3000/city", {
      country_id: payload.selectID,
      city_name: payload.cityName,
      population: payload.population,
    })
    .then((res) => console.log(res.data))
    .then((res) => dispatch(cityPostSuccess(res)))
    .catch((err) => dispatch(cityPostFauiluier(err)));
};

const getCityObj = () => (dispatch) => {
  console.log("CITY PAYLOAD; ");
  dispatch(cityGetRequest());
  axios
    .get("http://localhost:3000/city")
    .then((res) => console.log("CITY RESPONSE: ", res.data))
    .then((res) => dispatch(cityGetSuccess(res)))
    .catch((err) => dispatch(cityGetFauiluier(err)));
};
export {
  loginPostRequest,
  loginPostSuccess,
  loginPostFauiluier,
  getLoginAuth,
  countryPostRequest,
  countryPostFauiluier,
  getCountryObj,
  postCityObj,
  getCityObj,
};
