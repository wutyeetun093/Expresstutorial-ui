import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";
import { reducer as form } from "redux-form";
import fashionReducer from "../services/fashion/FashionReducer";

export default history =>
  combineReducers({
    router: connectRouter(history),
    fashions: fashionReducer,
    form
  });
