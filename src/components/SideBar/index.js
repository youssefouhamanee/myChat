import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import SideBarChats from "./SideBarChats";
import SideBarHeader from "./SideBarHeader";
import { SideBarWrapper } from "./styled";
import db, { auth } from "../../firebase";
import { setChats } from "../../redux/actions";

const SideBar = () => {
	const dispatch = useDispatch();
	useEffect(() => {
		db.collection("chats").onSnapshot((snapshot) =>
			dispatch(
				setChats(
					snapshot.docs.map((doc) => ({
						id: doc.id,
						data: doc.data()
					}))
				)
			)
		);
	}, []);

	const addChat = () => {
		const chatName = prompt("add chat name!");
		if (chatName) {
			db.collection("chats").add({
				chatName: chatName
			});
		}
	};
	return (
		<SideBarWrapper>
			<SideBarHeader addChat={addChat} />
			<SideBarChats />
		</SideBarWrapper>
	);
};
export default SideBar;
