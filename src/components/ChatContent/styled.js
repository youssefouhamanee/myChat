import styled from "styled-components";

export const ChatContentWrapper = styled.div`
	display: flex;
	flex: 0.75;
	flex-direction: column;
	height: 100vh;

	.chat__header {
		background-color: #f5f5f5;
		display: flex;
		padding: 0px 20px;
		justify-content: space-between;
		align-items: center;
		border-bottom: 1px solid lightgray;
		h4 {
			font-weight: 500;
			color: gray;
			font-size: 14px;
		}
		strong {
			svg {
				cursor: pointer;
			}
		}
	}
	.chat__conversation {
		height: 1000px;
		overflow: scroll;
		padding: 10px;
	}
	.chat__footer {
		display: flex;
		padding: 20px;
		background-color: #f5f5f5;
		border-top: 1px solid gainsboro;
		flex-direction: row;
		align-items: center;
		input {
			width: 100%;
			border: 1px solid gainsboro;
			border-radius: 50px;
			padding: 15px 10px;
			background-color: white;
			outline: 0;
		}
		.icon__send {
			margin-left: 25px;
			cursor: pointer;
			svg {
				width: 30px;
				height: 30px;
				color: lightskyblue;
			}
		}
	}
`;

export const MessageWrapper = styled.div`
	display: flex;
	width: fit-content;
	align-items: center;
	justify-content: space-between;
	position: relative;
	margin: 15px 0px;
	.message__content {
		background-color: skyblue;
		padding: 5px 15px;
		border-radius: 50px;
		color: white;
		margin-left: 5px;
	}
	.message__time {
		position: absolute;
		right: 0;
		bottom: -12px;
		color: gray;
		font-size: 12px;
	}
`;
