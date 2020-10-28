// import { thunk } from "redux-thunk";
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
} from "./actionType";
export const initState = {
  token: "",
  isAuth: true,
  isError: true,
  city: [],
  countryList: [],
};

export default (state = initState, { type, payload }) => {
  console.log("REDUCER: ", payload);
  switch (type) {
    case LOGIN_POST_REQUEST:
      return {
        ...state,
        isAuth: true,
      };
    case LOGIN_POST_SUCCESSS:
      console.log("LOGIN_POST_SUCCESSS:");
      return {
        ...state,
        // isAuth: true,
        isError: payload.error,
        token: payload.token,
      };
    case LOGIN_POST_FAUILUIER:
      return {
        ...state,
        isError: payload.error,
      };
    case COUNTRY_POST_REQUEST:
      return {
        ...state,
      };
    case COUNTRY_POST_SUCCESSS:
      return {
        ...state,
        countryList: [...state.countryList, payload],
      };
    case COUNTRY_POST_FAUILUIER:
      return {
        ...state,
        isAuth: true,
      };
    case COUNTRY_GET_REQUEST:
      return {
        ...state,
        country: payload,
        // name: payload.cname,
      };
    case COUNTRY_GET_SUCCESSS:
      return {
        ...state,
        countryList: payload,
      };
    case COUNTRY_GET_FAUILUIER:
      return {
        ...state,
        // isAuth: true,
      };
    case CITY_POST_REQUEST:
      return {
        ...state,
        cname: payload,
      };
    case CITY_POST_SUCCESSS:
      return {
        ...state,
        payload: payload,
      };
    case CITY_POST_FAUILUIER:
      return {
        ...state,
        isAuth: true,
      };
    case CITY_GET_REQUEST:
      return {
        ...state,
        city: payload,
      };
    case CITY_GET_SUCCESSS:
      return {
        ...state,
        city: payload,
      };
    case CITY_GET_FAUILUIER:
      return {
        ...state,
        isAuth: true,
      };
    default:
      return state;
  }
};
