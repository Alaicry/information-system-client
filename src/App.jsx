import React from "react";
import Main from "./components/Main";
import Header from "./components/Header";
import { useDispatch } from "react-redux";
import { fetchAuthMe } from "./redux/slices/userSlice";
import { Container } from "@chakra-ui/react";

const App = () => {
	const dispatch = useDispatch();
	React.useEffect(() => {
		dispatch(fetchAuthMe());
	}, []);

	return (
		<Container
			maxW="1054px"
			padding="0 15px"
			margin="0 auto"

		>
			<Header />
			<Main />
		</Container>
	);
};

export default App;
