import {
  LOGIN_POST_REQUEST,
  LOGIN_POST_SUCCESS,
  LOGIN_POST_FAULIER,
} from "../auth-redux/authActionType";

const initState = {
  isAuth: false,
  token: "",
};

export default (state = initState, { type, payload }) => {
  console.log("Auth Reducer: ", payload);
  switch (type) {
    case LOGIN_POST_REQUEST:
      return {
        ...state,
      };

    case LOGIN_POST_SUCCESS:
      return {
        ...state,
        isAuth: true,
        token: payload.token,
      };
    case LOGIN_POST_FAULIER:
      return {
        ...state,
      };

    default:
      return state;
  }
};
