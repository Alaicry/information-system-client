import React from "react";
import { navLinkRoutes } from "../utils/constants/routes";
import { NavLink } from "react-router-dom";

const Header = () => {
	return (
		<header className="header">
			<ul className="menu">
				{navLinkRoutes.map((route) => (
					<li className="menu__item" key={route.name}>
						<NavLink className="menu__link" to={route.path}>
							{route.name}
						</NavLink>
					</li>
				))}
			</ul>
		</header>
	);
};
export default Header;
