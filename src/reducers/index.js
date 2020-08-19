import { combineReducers } from "redux";
import { postsReducer } from "./postsReducer";
import { userReducer } from "./userReducer";

export const reducer = combineReducers({
  posts: postsReducer,
  user: userReducer,
});
