import React from "react";
import Home from "../pages/Home";
import Guide from "../pages/Guide";
import Container from "./Container";
import { Route, Routes } from "react-router-dom";

const Main = () => {
	return (
		<main className="main">
			<Container classNameFromProps="main__container container--bg">
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/guide" element={<Guide />} />
				</Routes>
			</Container>
		</main>
	);
};

export default Main;
