import { createStore, applyMiddleware, combineReducers } from "redux";
import authreducer from "../redux/auth-redux/authReducer";
// import reducer from "../redux/action-redux/reducer";
import { composeWithDevTools } from "redux-devtools-extension";

import thunk from "redux-thunk";

const rootReducer = combineReducers({
  auth: authreducer,
  // app: reducer,
});

export const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);
