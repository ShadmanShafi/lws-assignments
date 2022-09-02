import postReducer from "./Posts/postReducer";
import filterReducer from "./Filters/filterReducer";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  posts: postReducer,
  filters: filterReducer,
})

export default rootReducer;