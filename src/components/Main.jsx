import React from "react";
import Auth from "../pages/Auth";
import Home from "../pages/Home";
import Guide from "../pages/Guide";

import { Route, Routes } from "react-router-dom";
import Branch from "./Branch";
import { Box, Container } from "@chakra-ui/react";

const Main = () => {
	return (
		<Box as="main">
			<Container
				maxW="1054px"
				padding="15px"
				margin="0 auto"
				borderRadius="10px"
				backgroundColor="#fff"
				boxShadow="6px 6px 10px 5px rgba(34, 60, 80, 0.2)"
			>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/guide" element={<Guide />} />
					<Route path="/account" element={<Auth />} />
					<Route path="/guide/branch" element={<Branch />} />
				</Routes>
			</Container>
		</Box>
	);
};

export default Main;
