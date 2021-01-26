import * as types from "../actions/types";

const initialState = {
	user: {}
};

const authReducer = (state = initialState, action) => {
	switch (action.type) {
		case types.LOGIN:
			console.log("ok");
			return {
				...state,
				user: state.user
			};
		default:
			return state;
	}
};

export default authReducer;
