import * as types from "../actions/types";

const initialstate = {
	input: ""
};

const inputMessageReducer = (state = initialstate, action) => {
	switch (action.type) {
		case types.SET_INPUT:
			return {
				...state,
				input: action.payload
			};

		default:
			return state;
	}
};
export default inputMessageReducer;
