import React from "react";
import { AccountCircle } from "@material-ui/icons";
import data from "../../data.json";
const ItemChat = () => {
	return (
		<>
			{data?.messages.map((m) => (
				<div className="chat__content">
					<div className="chat__avatar">
						{m.avatar ? (
							<img src={m.avatar} alt="avatar user" />
						) : (
							<AccountCircle />
						)}
					</div>
					<div className="chat__details">
						<div className="chat__details_header">
							<strong>{m.name_contact}</strong> <small>{m.time}</small>
						</div>
						<div className="chat__details_body">{m.message}</div>
					</div>
				</div>
			))}
		</>
	);
};
export default ItemChat;
