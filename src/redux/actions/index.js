import * as types from "./types";

export const login = (data) => {
	return {
		type: types.LOGIN,
		payload: data
	};
};

export const logout = () => {
	return {
		type: types.LOGOUT
	};
};

export const setChats = (data) => {
	return {
		type: types.FETCH_LIST_CHAT,
		payload: data
	};
};
