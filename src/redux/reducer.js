// import { thunk } from "redux-thunk";
import {
  LOGIN_GET_REQUEST,
  LOGIN_GET_SUCCESSS,
  LOGIN_GET_FAUILUIER,
  POSTS_POST_REQUEST,
  POSTS_POST_SUCCESS,
  POSTS_POST_FAILURE,
  POSTS_GET_REQUEST,
  POSTS_GET_SUCCESS,
  POSTS_GET_FAILURE,
  POSTS_LIKES_REQUEST,
  POSTS_LIKES_SUCCESS,
  POSTS_LIKES_FAILURE,
} from "./actionType";
export const initState = {
  isError: false,
  loginObj: [],
  isAuth: false,
  allPosts: [],
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
    case POSTS_POST_REQUEST:
      return {
        ...state,
      };
    case POSTS_POST_SUCCESS:
      console.log("POSTS_POST_SUCCESS ", payload);
      return {
        ...state,
        isAuth: true,
        allPosts: [...state.allPosts, payload],
      };
    case POSTS_POST_FAILURE:
      return {
        ...state,
        isError: true,
      };
    case POSTS_GET_REQUEST:
      return {
        ...state,
      };
    case POSTS_GET_SUCCESS:
      console.log("POSTS_POST_SUCCESS ", payload);
      return {
        ...state,
        isAuth: true,
        allPosts: payload,
      };
    case POSTS_GET_FAILURE:
      return {
        ...state,
        isError: true,
      };
    case POSTS_LIKES_REQUEST:
      return {
        ...state,
      };
    case POSTS_LIKES_SUCCESS:
      console.log("POSTS_Likes_SUCCESS ", payload);
      return {
        ...state,
        isAuth: true,
        allPosts: payload,
      };
    case POSTS_LIKES_FAILURE:
      return {
        ...state,
        isError: true,
      };
    default:
      return state;
  }
};
