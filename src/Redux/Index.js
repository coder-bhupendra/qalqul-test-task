import { combineReducers } from "@reduxjs/toolkit";
import articleReducer from "./ArticlesSlice";
import errorReducer from "./ErrorSlice";
import userReducer from "./UserSlice";
import filterReducer from "./FilterSlice";
import commentsReducer from "./CommentsSlice";

const rootReducer= combineReducers({
    articles: articleReducer,
    errors: errorReducer,
    user: userReducer,
    filter: filterReducer,
    comments: commentsReducer
})

export default rootReducer;