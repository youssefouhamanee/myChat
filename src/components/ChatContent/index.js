import React from "react";
import { ChatContentWrapper } from "./styled";
import SendIcon from "@material-ui/icons/Send";
const ChatContent = () => {
	return (
		<ChatContentWrapper>
			<div className="chat__header">
				<h4>
					To: <span>HIRE ME</span>{" "}
				</h4>
				<strong>Details</strong>
			</div>
			<div className="chat__conversation"></div>
			<div className="chat__footer">
				<input type="input" placeholder="type a message ..." />
				<span className="icon__send">
					<SendIcon />
				</span>
			</div>
		</ChatContentWrapper>
	);
};
export default ChatContent;
