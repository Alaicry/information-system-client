import React from "react";
import Header from "./components/Header";
import Container from "./components/Container";
import { Route, Router, Routes } from "react-router-dom";
import Home from "./pages/Home";

const App = () => {
	return (
		<Container>
			<Header />
			<main className="main">
				<Container classNameFromProps="main__container container--bg">
					<Routes>
						<Route path="/" element={<Home />} />
					</Routes>
				</Container>
			</main>
		</Container>
	);
};

export default App;
