import { createSelector } from "reselect";

export const selectorUser = createSelector(
	(state) => state.user,
	(state) => state.chats,
	(userState, listChatState) => {
		return {
			user: userState.user,
			chats: listChatState.chats
		};
	}
);
