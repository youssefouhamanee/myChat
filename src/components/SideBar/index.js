import React from "react";
import SideBarChats from "./SideBarChats";
import SideBarHeader from "./SideBarHeader";
import { SideBarWrapper } from "./styled";

const SideBar = () => {
	return (
		<SideBarWrapper>
			<SideBarHeader />
			<SideBarChats />
		</SideBarWrapper>
	);
};
export default SideBar;
