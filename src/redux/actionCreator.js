import {
  LOGIN_POST_REQUEST,
  LOGIN_POST_SUCCESSS,
  LOGIN_POST_FAUILUIER,
  COUNTRY_POST_REQUEST,
  COUNTRY_POST_SUCCESSS,
  COUNTRY_POST_FAUILUIER,
  COUNTRY_GET_REQUEST,
  COUNTRY_GET_SUCCESSS,
  COUNTRY_GET_FAUILUIER,
  CITY_POST_REQUEST,
  CITY_POST_SUCCESSS,
  CITY_POST_FAUILUIER,
  CITY_GET_REQUEST,
  CITY_GET_SUCCESSS,
  CITY_GET_FAUILUIER,
  DELETE_CITY_REQUEST,
  DELETE_CITY_SUCCESS,
  DELETE_CITY_FAUILUIER,
  UPDATE_REQUEST,
  UPDATE_SUCCESS,
  UPDATE_FAUILUIER,
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
const countryGetRequest = (payload) => {
  return { type: COUNTRY_GET_REQUEST, payload };
};

const countryGetSuccess = (payload) => {
  return { type: COUNTRY_GET_SUCCESSS, payload };
};

const countryGetFauiluier = (payload) => {
  return { type: COUNTRY_GET_FAUILUIER, payload };
};

const deleteCityRequest = (payload) => {
  return { type: DELETE_CITY_REQUEST, payload };
};

const deleteCitySuccess = (payload) => {
  return { type: DELETE_CITY_SUCCESS, payload };
};

const deleteCityFauiluier = (payload) => {
  return { type: DELETE_CITY_FAUILUIER, payload };
};

const updateRequest = (payload) => {
  return { type: UPDATE_REQUEST, payload };
};

const updateSuccess = (payload) => {
  return { type: UPDATE_SUCCESS, payload };
};

const updateFauiluier = (payload) => {
  return { type: UPDATE_FAUILUIER, payload };
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
    // .then((res) => console.log(res.data))
    .then((res) => dispatch(countryPostSuccess(res.data)))
    .catch((err) => dispatch(countryPostFauiluier(err)));
};
const postCityObj = (payload) => (dispatch) => {
  console.log("CITY PAYLOAD; ", payload);
  dispatch(cityPostRequest(payload));
  axios
    .post("http://localhost:3000/city", {
      country_name: payload.selectValue,
      city_name: payload.cityName,
      population: payload.population,
    })
    // .then((res) => console.log(res.data))
    .then((res) => dispatch(cityPostSuccess(res.data)))
    .catch((err) => dispatch(cityPostFauiluier(err)));
};

const getCityObj = () => (dispatch) => {
  console.log("CITY PAYLOAD; ");
  dispatch(cityGetRequest());
  axios
    .get("http://localhost:3000/city")
    // .then((res) => console.log("CITY RESPONSE: ", res.data))
    .then((res) => dispatch(cityGetSuccess(res.data)))
    .catch((err) => dispatch(cityGetFauiluier(err)));
};
const getCountryList = () => (dispatch) => {
  dispatch(countryGetFauiluier());
  axios
    .get("http://localhost:3000/country")
    // .then((res) => console.log("Country Response: ", res.data));
    .then((res) => dispatch(countryGetSuccess(res.data)))
    .catch((err) => dispatch(countryGetFauiluier(err)));
};

const deleteCity = (id) => (dispatch) => {
  console.log("DELETE Payload: ", id);
  dispatch(deleteCityRequest);
  axios
    .delete(`http://localhost:3000/city/${id}`)
    // .then((res) => console.log("DELETE REQUEST: ", res))
    .then((res) => dispatch(deleteCitySuccess(id)))
    .catch((err) => dispatch(deleteCityFauiluier(err)));
};

const updatePopulation = (payload) => (dispatch) => {
  console.log("Population: ", payload);
  const { id, population } = payload;
  dispatch(updateRequest());
  axios
    .patch(`http://localhost:3000/city/${id}`, {
      id: id,
      population: population,
    })
    .then((res) => res.data)
    .then((res) => dispatch(updateSuccess(res.data)))
    .catch((err) => dispatch(updateFauiluier(err)));
};

export {
  getLoginAuth,
  getCountryObj,
  postCityObj,
  getCityObj,
  getCountryList,
  deleteCity,
  updatePopulation,
};
