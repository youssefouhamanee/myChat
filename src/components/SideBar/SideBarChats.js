import React from "react";
import { useSelector } from "react-redux";
import ItemChat from "./ItemChat";
import { ItemChatWrapper } from "./styled";
import { selectorUser } from "../../redux/selector";

const SideBarChats = () => {
	const { chats } = useSelector(selectorUser);
	return (
		<ItemChatWrapper>
			{chats.map(({ id, data: { chatName } }) => (
				<ItemChat key={id} id={id} chatName={chatName} />
			))}
		</ItemChatWrapper>
	);
};
export default SideBarChats;
