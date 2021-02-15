import * as types from "../actions/types";

const initialstate = {
	messages: []
};
const messagesReducer = (state = initialstate, action) => {
	switch (action.type) {
		case types.FETCH_MESSAGES:
			console.log(action.payload);
			return {
				...state,
				messages: action.payload
			};
		default:
			return state;
	}
};

export default messagesReducer;
