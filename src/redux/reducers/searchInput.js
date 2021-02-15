import * as types from "../actions/types";

const initialState = {
	search: ""
};

const searchReducer = (state = initialState, action) => {
	switch (action.type) {
		case types.SEARCH_VALUE:
			console.log(action.payload);
			return {
				...state,
				search: action.payload
			};
		default:
			return state;
	}
};
export default searchReducer;
