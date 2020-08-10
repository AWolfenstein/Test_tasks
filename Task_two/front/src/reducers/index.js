import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";
import users from "./users";

export default combineReducers({
  users,
});
