import React from "react";

import { Avatar } from "@material-ui/core";
import { MessageWrapper } from "./styled";
import { useSelector } from "react-redux";
import { selectorUser } from "../../redux/selector";

const Messages = ({ contents: { message, photo, email, timestamp } }) => {
	const { user } = useSelector(selectorUser);
	return (
		<MessageWrapper className={user.email === email && "sender__message"}>
			<div className="avatar__logo">
				<Avatar src={photo} />
			</div>
			<div className="message__content ">{message}</div>
			<div className="message__time">
				<small>{new Date(timestamp?.toDate()).toLocaleTimeString()}</small>
			</div>
		</MessageWrapper>
	);
};
export default Messages;
