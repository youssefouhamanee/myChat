import * as types from "../actions/types";

const initialstate = {
	chats: [],
	chatId: "",
	chatName: "",
	chatInfo: []
};

const chatReducer = (state = initialstate, action) => {
	switch (action.type) {
		case types.FETCH_LIST_CHAT:
			return {
				...state,
				chats: action.payload
			};
		case types.SET_CHAT:
			return {
				...state,
				chatId: action.payload.id,
				chatName: action.payload.name
			};
		case types.CHAT_INFO:
			return {
				...state,
				chatInfo: action.payload
			};
		default:
			return state;
	}
};
export default chatReducer;
