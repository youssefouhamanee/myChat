import { combineReducers } from "redux";
import authReducer from "./reducers/auth";
import chatReducer from "./reducers/listChat";
const rootReducer = combineReducers({
	user: authReducer,
	chats: chatReducer
});

export default rootReducer;
