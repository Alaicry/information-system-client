import React from "react";
import List from "../components/List";
import { homeLinks } from "../utils/constants/routes";

const Home = () => {
	return <List list={homeLinks} />;
};

export default Home;
