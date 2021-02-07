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
	}
	.chat__conversation {
		height: 1000px;
		overflow: scroll;
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
