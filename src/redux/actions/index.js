import * as types from "./types";

export const login = () => {
	return {
		type: types.LOGIN
	};
};

export const fetchListChat = () => {
	return {
		type: types.FETCH_LIST_CHAT
	};
};
