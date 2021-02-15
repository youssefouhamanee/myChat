import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Search } from "@material-ui/icons";
import { Avatar } from "@material-ui/core";
import { SideBarHeaderWrapper } from "./styled";
import { selectorUser } from "../../redux/selector";
import ChatIcon from "@material-ui/icons/Chat";
import { setSearchValue } from "../../redux/actions";

const SideBarHeader = ({ addChat }) => {
	const { user } = useSelector(selectorUser);
	const dispatch = useDispatch();
	const handleChangeSearch = (e) => {
		dispatch(setSearchValue(e.target.value));
	};
	return (
		<SideBarHeaderWrapper>
			<div className="avatar__account">
				<Avatar src={user.photo} />
			</div>
			<div className="section__search">
				<Search />{" "}
				<input
					type="text"
					placeholder="search ..."
					onChange={handleChangeSearch}
				/>
			</div>
			<div>
				<ChatIcon onClick={addChat} />
			</div>
		</SideBarHeaderWrapper>
	);
};
export default SideBarHeader;
