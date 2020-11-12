import {
  SEARCH_POST_REQUEST,
  SEARCH_POST_SUCCESS,
  SEARCH_POST_FAULIER,
} from "../action-redux/actionType";

const initState = {
  isAuth: false,
  items: [],
};

export default (state = initState, { type, payload }) => {
  console.log("Reducer: ", payload);
  switch (type) {
    case SEARCH_POST_REQUEST:
      return {
        ...state,
      };

    case SEARCH_POST_SUCCESS:
      return {
        ...state,
        isAuth: true,
        items: payload,
      };
    case SEARCH_POST_FAULIER:
      return {
        ...state,
      };

    default:
      return state;
  }
};
