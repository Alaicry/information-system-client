import React from "react";
import Auth from "../pages/Auth";
import Home from "../pages/Home";
import Guide from "../pages/Guide";
import Container from "./Container";
import { Route, Routes } from "react-router-dom";

const Main = () => {
	return (
		<main className="main">
			<Container classNameFromProps="main__container container--bg container--shadow">
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/guide" element={<Guide />} />
					<Route path="/auth" element={<Auth />} />
				</Routes>
			</Container>
		</main>
	);
};

export default Main;
