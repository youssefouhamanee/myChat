import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login, fetchListChat, fetchMessage, logout } from "./redux/actions";
import MyChat from "./components";
import { selectorUser } from "./redux/selector";
import Login from "./components/Login";
import { auth } from "./firebase";
import "./app.css";
function App() {
	const dispatch = useDispatch();
	const { user } = useSelector(selectorUser);
	useEffect(() => {
		auth.onAuthStateChanged((authUser) => {
			if (authUser) {
				// user logged in
				dispatch(
					login({
						uid: authUser.uid,
						photo: authUser.photoURL,
						email: authUser.email,
						displayName: authUser.displayName
					})
				);
			} else {
				// user logged out
				dispatch(logout());
			}
		});
	}, []);
	return <>{user ? <MyChat /> : <Login />}</>;
}

export default App;
