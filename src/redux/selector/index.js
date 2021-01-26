import { createSelector } from "reselect";

export const selectorUser = createSelector(
	(state) => state.user,
	(state) => state.listChat,
	(userState, listChatState) => {
		return {
			user: userState?.login,
			list: listChatState
		};
	}
);
