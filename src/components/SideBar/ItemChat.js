import React, { useEffect } from "react";
import { Avatar } from "@material-ui/core";
import data from "../../data.json";
import { useSelector } from "react-redux";
import { selectorUser } from "../../redux/selector";

const ItemChat = () => {
	const { chats } = useSelector(selectorUser);
	console.log(chats);
	return (
		<>
			{chats.map((m) => (
				<div className="chat__content">
					<div className="chat__avatar">
						<Avatar />
					</div>
					<div className="chat__details">
						<div className="chat__details_header">
							<strong>{m.data.chatName}</strong> <small>timestamp</small>
						</div>
						<div className="chat__details_body">messasge ...</div>
					</div>
				</div>
			))}
		</>
	);
};
export default ItemChat;
