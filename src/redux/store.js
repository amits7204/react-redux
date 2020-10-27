import { createStore, applyMiddleware, combineReducers } from "redux";
import reducer from "./reducer";
import countryReducer from "./countryredux/countryReducer";
import thunk from "redux-thunk";

const rootReducer = combineReducers({
  app: reducer,
  app2: countryReducer,
});

export const store = createStore(rootReducer, applyMiddleware(thunk));
