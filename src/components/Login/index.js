import { Button } from "@material-ui/core";
import React from "react";
import { LoginWrapper } from "./styled";
import { auth, provider } from "../../firebase";
function Login() {
	const signIn = () => {
		auth.signInWithPopup(provider).catch((error) => alert(error.message));
	};
	return (
		<LoginWrapper>
			<div className="logo_app">
				<img
					src="https://www.logo.wine/a/logo/WeChat/WeChat-Icon-Light-Grey-Logo.wine.svg"
					alt="my-chat"
				/>
				<h2 className="title">My chat</h2>
			</div>

			<Button onClick={signIn}>SIGN IN</Button>
		</LoginWrapper>
	);
}

export default Login;
