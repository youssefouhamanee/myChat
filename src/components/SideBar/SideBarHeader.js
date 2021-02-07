import React from "react";
import { useSelector } from "react-redux";
import { Search } from "@material-ui/icons";
import { Avatar } from "@material-ui/core";
import { SideBarHeaderWrapper } from "./styled";
import { selectorUser } from "../../redux/selector";
import { auth } from "../../firebase";
import ChatIcon from "@material-ui/icons/Chat";

const SideBarHeader = ({ addChat }) => {
	const { user } = useSelector(selectorUser);

	return (
		<SideBarHeaderWrapper>
			<div className="avatar__account">
				<Avatar src={user.photo} onClick={() => auth.signOut()} />
			</div>
			<div className="section__search">
				<Search /> <input type="text" placeholder="search ..." />
			</div>
			<div>
				<ChatIcon onClick={addChat} />
			</div>
		</SideBarHeaderWrapper>
	);
};
export default SideBarHeader;
