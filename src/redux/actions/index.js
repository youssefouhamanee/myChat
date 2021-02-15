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

export const fetchListChats = (data) => {
	return {
		type: types.FETCH_LIST_CHAT,
		payload: data
	};
};

export const setChat = (data) => {
	return {
		type: types.SET_CHAT,
		payload: data
	};
};

export const setMessages = (data) => {
	return {
		type: types.FETCH_MESSAGES,
		payload: data
	};
};
export const setInput = (data) => {
	return {
		type: types.SET_INPUT,
		payload: data
	};
};

export const setChatInfo = (d) => {
	return {
		type: types.CHAT_INFO,
		payload: d
	};
};

export const setSearchValue = (data) => {
	return {
		type: types.SEARCH_VALUE,
		payload: data
	};
};
