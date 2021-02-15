import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import firebase from "firebase";
import { ChatContentWrapper } from "./styled";
import SendIcon from "@material-ui/icons/Send";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import MicIcon from "@material-ui/icons/Mic";
import { selectorUser } from "../../redux/selector";
import Messages from "./Messages";
import db from "../../firebase";
import { auth } from "../../firebase";
import { setInput, setMessages } from "../../redux/actions";

const ChatContent = () => {
	const dispatch = useDispatch();
	const { messages, chatName, chatId, input, user } = useSelector(selectorUser);

	useEffect(() => {
		console.log(chatId);
		if (chatId) {
			db.collection("chats")
				.doc(chatId)
				.collection("messages")
				.orderBy("timestamp", "desc")
				.onSnapshot((snapshot) =>
					dispatch(
						setMessages(
							snapshot.docs.map((doc) => ({
								id: doc.id,
								data: doc.data()
							}))
						)
					)
				);
		}
	}, [chatId]);

	const sendMessage = (e) => {
		e.preventDefault();
		if (input && input.trim() !== "") {
			db.collection("chats").doc(chatId).collection("messages").add({
				timestamp: firebase.firestore.FieldValue.serverTimestamp(),
				message: input,
				uuid: user.uid,
				photo: user.photo,
				email: user.email,
				displayName: user.displayName
			});
		}

		dispatch(setInput(""));
	};
	console.log(messages);
	return (
		<ChatContentWrapper>
			<div className="chat__header">
				{chatName ? (
					<h4>
						To: <span>{chatName}</span>{" "}
					</h4>
				) : (
					<h4>My chat</h4>
				)}

				<strong>
					<ExitToAppIcon onClick={() => auth.signOut()} />
				</strong>
			</div>
			{chatId ? (
				<>
					<div className="chat__conversation">
						{messages.map(({ id, data }) => (
							<Messages key={id} contents={data} />
						))}
					</div>
					<div className="chat__footer">
						<form
							style={{
								display: "flex",
								flexDirection: "row",
								width: "100%",
								justifyContent: "space-between",
								alignItems: "center"
							}}
							onSubmit={sendMessage}
						>
							<input
								type="input"
								placeholder="type a message ..."
								value={input}
								onChange={(e) => dispatch(setInput(e.target.value))}
							/>
							<span className="icon__send">
								{input ? <SendIcon onClick={sendMessage} /> : <MicIcon />}
							</span>
						</form>
					</div>
				</>
			) : (
				<p>select your message</p>
			)}
		</ChatContentWrapper>
	);
};
export default ChatContent;
