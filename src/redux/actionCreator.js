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

import axios from "axios";

const loginGetRequest = (payload) => {
  return { type: LOGIN_GET_REQUEST, payload };
};

const loginGetSuccess = (payload) => {
  return { type: LOGIN_GET_SUCCESSS, payload };
};

const loginGetFauiluier = (payload) => {
  return { type: LOGIN_GET_FAUILUIER, payload };
};

const postsPostRequest = (payload) => {
  return { type: POSTS_POST_REQUEST, payload };
};

const postsPostSuccess = (payload) => {
  return { type: POSTS_POST_SUCCESS, payload };
};

const postsPostFauiluier = (payload) => {
  return { type: POSTS_POST_FAILURE, payload };
};

const postsGetRequest = (payload) => {
  return { type: POSTS_GET_REQUEST, payload };
};

const postsGetSuccess = (payload) => {
  return { type: POSTS_GET_SUCCESS, payload };
};

const postsGetFauiluier = (payload) => {
  return { type: POSTS_GET_FAILURE, payload };
};

const postsLikesRequest = (payload) => {
  return { type: POSTS_LIKES_REQUEST, payload };
};

const postsLikesSuccess = (payload) => {
  return { type: POSTS_LIKES_SUCCESS, payload };
};

const postsLikesFauiluier = (payload) => {
  return { type: POSTS_LIKES_FAILURE, payload };
};

const getLoginAuth = (payload) => (dispatch) => {
  console.log(payload);
  dispatch(loginGetRequest());
  axios
    .get("http://localhost:3000/login")
    .then((res) => res)
    .then((res) => dispatch(loginGetSuccess(res.data)))
    .catch((err) => dispatch(loginGetFauiluier(err)));
};

const postsPostPayload = (payload) => (dispatch) => {
  console.log("POSTS PAYLOAD: ", payload);
  const {
    author_id,
    author_name,
    author_username,
    author_title,
    body,
  } = payload;
  let data = {
    author_id: author_id,
    author_name: author_name,
    author_username: author_username,
    author_title: author_title,
    body: body,
    comments: [],
    likes: [],
  };
  dispatch(postsPostRequest());
  axios
    .post("http://localhost:3000/posts", data)
    .then((res) => console.log(res.data))
    .catch((err) => console.log(err));
};

const getPosts = () => (dispatch) => {
  dispatch(postsGetRequest());
  axios
    .get("http://localhost:3000/posts")
    .then((res) => res.data)
    .then((res) => dispatch(postsGetSuccess(res)))
    .catch((err) => dispatch(postsGetFauiluier(err)));
};

const postsLikesData = (payload) => (dispatch) => {
  console.log(payload);
  let { id, postLike, authorId, userName } = payload;
  postLike = [...postLike, { author_id: authorId, userName: userName }];
  dispatch(postsLikesRequest());
  return axios
    .patch("http://localhost:3000/posts/" + id, {
      likes: postLike,
    })
    .then((res) => res.data)
    .then((res) => dispatch(postsLikesSuccess(res)))
    .catch((err) => dispatch(postsLikesFauiluier(err)));
};

export { getLoginAuth, postsPostPayload, getPosts, postsLikesData };
