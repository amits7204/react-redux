// import { thunk } from "redux-thunk";
import {
  COUNTRY_GET_REQUEST,
  COUNTRY_GET_SUCCESSS,
  COUNTRY_GET_FAUILUIER,
} from "./countryResponseType";
export const initState = {
  country: [],
};

export default (state = initState, { type, payload }) => {
  console.log("Country reducer called: ", payload);
  switch (type) {
    case COUNTRY_GET_REQUEST:
      return {
        ...state,
        country: payload,
        // name: payload.cname,
      };
    case COUNTRY_GET_SUCCESSS:
      return {
        ...state,
        country: payload,
      };
    case COUNTRY_GET_FAUILUIER:
      return {
        ...state,
        // isAuth: true,
      };
    default:
      return state;
  }
};
