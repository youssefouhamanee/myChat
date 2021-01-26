import React from "react";
import { MyChatWrapper } from "./styled";
import SideBar from "./SideBar";
import ChatContent from "./ChatContent";
function MyChat() {
	return (
		<MyChatWrapper>
			<SideBar />
			<ChatContent />
		</MyChatWrapper>
	);
}
export default MyChat;
