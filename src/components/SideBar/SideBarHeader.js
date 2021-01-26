import React from "react";
import { Search, AccountCircle } from "@material-ui/icons";
import { SideBarHeaderWrapper } from "./styled";
const SideBarHeader = () => {
	return (
		<SideBarHeaderWrapper>
			<div className="avatar__account">
				<AccountCircle />
			</div>
			<div className="section__search">
				<Search /> <input type="text" placeholder="search ..." />
			</div>
		</SideBarHeaderWrapper>
	);
};
export default SideBarHeader;
