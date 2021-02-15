import React, { useEffect } from "react";
import { Avatar } from "@material-ui/core";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { selectorUser } from "../../redux/selector";
import { setChat } from "../../redux/actions";

const ItemChat = () => {
	const { chats, chatId } = useSelector(selectorUser);
	const dispatch = useDispatch();
	console.log(chats);
	return (
		<>
			{chats.map((m) => (
				<div
					className={`chat__content ${m.id === chatId && "active_chat"}`}
					onClick={() => {
						dispatch(
							setChat({
								id: m.id,
								name: m.data.chatName
							})
						);
					}}
					key={m.id}
				>
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
