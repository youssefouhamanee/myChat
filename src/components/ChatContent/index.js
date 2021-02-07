import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { ChatContentWrapper } from "./styled";
import SendIcon from "@material-ui/icons/Send";
import MicIcon from "@material-ui/icons/Mic";
import { selectorUser } from "../../redux/selector";

const ChatContent = () => {
	const dispatch = useDispatch();
	const { message } = useSelector(selectorUser);
	const sendMessage = (e) => {
		e.preventDefault();
	};
	return (
		<ChatContentWrapper>
			<div className="chat__header">
				<h4>
					To: <span>HIRE ME</span>{" "}
				</h4>
				<strong>Details</strong>
			</div>
			<div className="chat__conversation">
				<h1>hello i am message</h1>
				<h1>hello i am message</h1>
				<h1>hello i am message</h1>
				<h1>hello i am message</h1>
				<h1>hello i am message</h1>
				<h1>hello i am message</h1>
				<h1>hello i am message</h1>
				<h1>hello i am message</h1>
				<h1>hello i am message</h1>
				<h1>hello i am message</h1>
				<h1>hello i am message</h1>
				<h1>hello i am message</h1>
				<h1>hello i am message</h1>
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
				>
					<input type="input" placeholder="type a message ..." />
					<span className="icon__send" onClick={sendMessage}>
						{message ? <SendIcon /> : <MicIcon />}
					</span>
				</form>
			</div>
		</ChatContentWrapper>
	);
};
export default ChatContent;
