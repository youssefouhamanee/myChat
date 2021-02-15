import React from "react";

import { Avatar } from "@material-ui/core";
import { MessageWrapper } from "./styled";

const Messages = ({ contents: { message, photo, timestamp } }) => {
	return (
		<MessageWrapper>
			<div className="avatar__logo">
				<Avatar src={photo} />
			</div>
			<div className="message__content">{message}</div>
			<div className="message__time">
				<small>{new Date(timestamp?.toDate()).toLocaleTimeString()}</small>
			</div>
		</MessageWrapper>
	);
};
export default Messages;
