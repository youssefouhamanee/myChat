import styled from "styled-components";

export const LoginWrapper = styled.div`
	display: grid;
	place-items: center;
	height: 100vh;
	.logo_app {
		display: grid;
		place-items: center;
		position: relative;
		img {
			object-fit: contain;
			height: 150px;
		}
		.title {
			color: black;
			position: absolute;
			top: 110px;
		}
	}
	button {
		width: 300px;
		background-color: #aaa;
		color: #fff;
		font-weight: 800;
		&:hover {
			background-color: whitesmoke;
			color: #aaa;
		}
	}
`;
