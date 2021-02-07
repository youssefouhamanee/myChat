import styled from "styled-components";

export const SideBarWrapper = styled.div`
	display: flex;
	flex: 0.25;
	background-color: #f5f5f5;
	flex-direction: column;
	border-right: 1px solid lightgray;
`;
export const SideBarHeaderWrapper = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: space-around;
	padding: 15px 0px;
	img.profile__photo {
		width: 42px;
		height: 42px;
		border-radius: 50px;
	}
	.avatar__account {
		svg {
			color: lightgrey;
			width: 50px;
			height: 50px;
		}
	}
	.section__search {
		display: flex;
		flex-direction: row;
		border-bottom: 1px solid lightgrey;
		color: lightgrey;
		input {
			outline-width: 0px;
			border: none;
			background-color: #f5f5f5;
			width: 200px;
		}
	}
`;

export const ItemChatWrapper = styled.div`
	display: flex;
	flex-direction: column;
	height: 100vh;
	position: relative;
	overflow: scroll;
	-ms-overflow-style: none;
	scrollbar-width: none;
	&::-webkit-scrollbar {
		display: none;
	}
	.chat__content {
		border-bottom: 1px solid gainsboro;
		padding: 15px 0px;
		display: flex;
		flex-direction: row;
		justify-content: space-around;
		align-items: center;
		cursor: pointer;
		&:hover {
			background-color: lightskyblue;
			color: white;
		}
		.chat__avatar {
			svg {
				color: lightgrey;
				width: 50px;
				height: 50px;
			}
			img {
				width: 42px;
				height: 42px;
				border-radius: 50px;
			}
		}
		.chat__details {
			display: flex;
			flex-direction: column;
			line-height: 1.5;
			position: relative;
			justify-content: space-between;
			align-items: left;
			width: 230px;
			margin-left: 5px;
			.chat__details_header {
				font-size: 15px;
				font-weight: 500;
				small {
					position: absolute;
					right: 0;
					top: 1px;
					font-size: 13px;
					font-weight: normal;
				}
			}
			.chat__details_body {
				font-size: 13px;
				font-weight: normal;
			}
		}
	}
`;
