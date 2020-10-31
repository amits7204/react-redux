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
  DELETE_CITY_REQUEST,
  DELETE_CITY_SUCCESS,
  DELETE_CITY_FAUILUIER,
  UPDATE_REQUEST,
  UPDATE_SUCCESS,
  UPDATE_FAUILUIER,
} from "./actionType";
export const initState = {
  token: "",
  isAuth: true,
  isError: true,
  city: [],
  countryList: [],
  city_id: 0,
};

export default (state = initState, { type, payload }) => {
  console.log("REDUCER: ", payload);
  switch (type) {
    case LOGIN_POST_REQUEST:
      return {
        ...state,
      };
    case LOGIN_POST_SUCCESSS:
      console.log("LOGIN_POST_SUCCESSS:");
      return {
        ...state,
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
      };
    case COUNTRY_GET_REQUEST:
      return {
        ...state,
      };
    case COUNTRY_GET_SUCCESSS:
      return {
        ...state,
        countryList: payload,
      };
    case COUNTRY_GET_FAUILUIER:
      return {
        ...state,
      };
    case CITY_POST_REQUEST:
      return {
        ...state,
      };
    case CITY_POST_SUCCESSS:
      return {
        ...state,
        city: [...state.city, payload],
      };
    case CITY_POST_FAUILUIER:
      return {
        ...state,
        isAuth: true,
      };
    case CITY_GET_REQUEST:
      return {
        ...state,
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
    case DELETE_CITY_REQUEST:
      return {
        ...state,
      };
    case DELETE_CITY_SUCCESS:
      const cityId = payload;
      const remainingCityList = state.city.filter((item) => item.id !== cityId);
      return {
        ...state,
        city: remainingCityList,
      };
    case DELETE_CITY_FAUILUIER:
      return {
        ...state,
        isAuth: true,
      };
    case UPDATE_REQUEST:
      return {
        ...state,
      };
    case UPDATE_SUCCESS:
      return {
        ...state,
        isAuth: false,
      };
    case UPDATE_FAUILUIER:
      return {
        ...state,
        isAuth: true,
      };
    default:
      return state;
  }
};
