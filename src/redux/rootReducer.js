import { combineReducers } from "redux";
import authReducer from "./reducers/auth";
import chatReducer from "./reducers/listChat";

const rootReducer = combineReducers({ authReducer, chatReducer });

export default rootReducer;