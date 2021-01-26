import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { login, fetchListChat } from "./redux/actions";
import MyChat from "./components";
import "./app.css";
function App() {
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(login());
		dispatch(fetchListChat());
	}, []);

	return (
		<>
			<MyChat />
		</>
	);
}

export default App;
