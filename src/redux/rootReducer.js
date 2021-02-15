import { combineReducers } from "redux";
import authReducer from "./reducers/auth";
import chatReducer from "./reducers/listChat";
import messagesReducer from "./reducers/messages";
import inputMessageReducer from "./reducers/input";
import searchReducer from "./reducers/searchInput";
const rootReducer = combineReducers({
	user: authReducer,
	chats: chatReducer,
	messages: messagesReducer,
	input: inputMessageReducer,
	search: searchReducer
});

export default rootReducer;
