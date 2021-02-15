import { createSelector } from "reselect";

export const selectorUser = createSelector(
	(state) => state.user,
	(state) => state.chats,
	(state) => state.messages,
	(state) => state.input,
	(state) => state.search,
	(userState, listChatState, messageState, inputState, searchState) => {
		return {
			user: userState.user,
			chats: searchState.search
				? listChatState.chats.filter(
						(m) =>
							m.data.chatName
								.toUpperCase()
								.indexOf(searchState.search.toUpperCase()) > -1
				  )
				: listChatState.chats,
			chatName: listChatState.chatName,
			chatId: listChatState.chatId,
			// messages: listChatState?.chats.map(
			// 	(c) => c.data.id === listChatState.chatId && messageState.messages
			// ),

			messages: messageState.messages,
			input: inputState.input
		};
	}
);
