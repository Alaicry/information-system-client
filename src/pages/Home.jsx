import React from "react";
import { homeLinks } from "../utils/constants/routes";
import { Link } from "react-router-dom";
import { GoLinkExternal } from "react-icons/go";
const Home = () => {
	return (
		<ul className="list-reset main__list list">
			{homeLinks.map((route) => (
				<li key={route.name} className="list__item">
					<Link to={route.path} className="list__link">
						{route.name}
						<GoLinkExternal className="icon" />
					</Link>
				</li>
			))}
		</ul>
	);
};

export default Home;
