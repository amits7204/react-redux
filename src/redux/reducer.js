// import { thunk } from "redux-thunk";
import {
  LOGIN_GET_REQUEST,
  LOGIN_GET_SUCCESSS,
  LOGIN_GET_FAUILUIER,
} from "./actionType";
export const initState = {
  isError: false,
  loginObj: [],
  isAuth: false,
};

export default (state = initState, { type, payload }) => {
  console.log("REDUCER: ", payload);
  switch (type) {
    case LOGIN_GET_REQUEST:
      return {
        ...state,
      };
    case LOGIN_GET_SUCCESSS:
      console.log("LOGIN_GET_SUCCESSS: ", payload);
      return {
        ...state,
        loginObj: payload,
        isAuth: true,
      };
    case LOGIN_GET_FAUILUIER:
      return {
        ...state,
        isError: true,
      };
    default:
      return state;
  }
};
