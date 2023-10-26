import React from "react";
import Auth from "../pages/Auth";
import Home from "../pages/Home";
import Guide from "../pages/Guide";
import Container from "./Container";
import { Route, Routes } from "react-router-dom";
import Branch from "./Branch";

const Main = () => {
	return (
		<main className="main">
			<Container classNameFromProps="main__container container--bg container--shadow">
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/guide" element={<Guide />} />
					<Route path="/auth" element={<Auth />} />
					<Route path="/guide/branch" element={<Branch />} />
				</Routes>
			</Container>
		</main>
	);
};

export default Main;
