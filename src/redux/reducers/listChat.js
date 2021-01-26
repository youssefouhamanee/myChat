import * as types from "../actions/types";

const initialstate = {
	list: []
};

export default function chatReducer(state = initialstate, action) {
	switch (action.type) {
		case types.FETCH_LIST_CHAT:
			console.log("hello");
			return {
				...state,
				list: state.list
			};
		default:
			return state;
	}
}
