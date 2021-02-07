import * as types from "../actions/types";

const initialstate = {
	chats: []
};

const chatReducer = (state = initialstate, action) => {
	switch (action.type) {
		case types.FETCH_LIST_CHAT:
			console.log(action.payload);
			return {
				...state,
				chats: action.payload
			};
		default:
			return state;
	}
};
export default chatReducer;
