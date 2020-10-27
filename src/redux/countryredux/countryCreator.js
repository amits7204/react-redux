import {
  COUNTRY_GET_REQUEST,
  COUNTRY_GET_SUCCESSS,
  COUNTRY_GET_FAUILUIER,
} from "./countryResponseType";

import axios from "axios";

const countryGetRequest = (payload) => {
  return { type: COUNTRY_GET_REQUEST, payload };
};

const countryGetSuccess = (payload) => {
  return { type: COUNTRY_GET_SUCCESSS, payload };
};

const countryGetFauiluier = (payload) => {
  return { type: COUNTRY_GET_FAUILUIER, payload };
};
