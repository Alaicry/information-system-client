import React from "react";
import List from "../components/List";
import { guideLinks } from "../utils/constants/routes";

const Guide = () => {
	return <List list={guideLinks} />;
};

export default Guide;
