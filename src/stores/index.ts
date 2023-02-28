import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { animalReducer, authReducer } from "./reducers";
import logger from "redux-logger";

const store = createStore(
  combineReducers({
    authState: authReducer,
    animalState: animalReducer,
  }),
  applyMiddleware(thunk, logger)
);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = any;
export default store;
