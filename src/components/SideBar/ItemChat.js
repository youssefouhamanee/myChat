import React, { useEffect } from "react";
import { Avatar } from "@material-ui/core";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { selectorUser } from "../../redux/selector";
import { setChat, setChatInfo } from "../../redux/actions";
import db from "../../firebase";

const ItemChat = ({ id, chatName }) => {
	const { chatId, chatInfo } = useSelector(selectorUser);
	const dispatch = useDispatch();
	useEffect(() => {
		db.collection("chats")
			.doc(id)
			.collection("messages")
			.orderBy("timestamp", "desc")
			.onSnapshot((snapshot) =>
				dispatch(setChatInfo(snapshot.docs.map((doc) => doc.data())))
			);
	}, [id]);
	console.log(chatInfo);
	return (
		<>
			<div
				className={`chat__content ${id === chatId && "active_chat"}`}
				onClick={() => {
					dispatch(
						setChat({
							id: id,
							name: chatName
						})
					);
				}}
				key={id}
			>
				<div className="chat__avatar">
					<Avatar src={chatInfo[0]?.photo} />
				</div>
				<div className="chat__details">
					<div className="chat__details_header">
						<strong>{chatName}</strong>{" "}
						<small>
							{chatInfo[0]?.timestamp?.toDate().toLocaleTimeString()}
						</small>
					</div>
					<div className="chat__details_body">{chatInfo[0]?.message}</div>
				</div>
			</div>
		</>
	);
};
export default ItemChat;
