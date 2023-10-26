import React from "react";
import Main from "./components/Main";
import Header from "./components/Header";
import Container from "./components/Container";
import { useDispatch } from "react-redux";
import { fetchAuthMe } from "./redux/slices/userSlice";

const App = () => {
	const dispatch = useDispatch();
	React.useEffect(() => {
		dispatch(fetchAuthMe());
	}, []);

	return (
		<Container>
			<Header />
			<Main />
		</Container>
	);
};

export default App;
