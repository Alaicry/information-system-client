import React from "react";
import { navLinkRoutes } from "../utils/constants/routes";
import { NavLink } from "react-router-dom";
import Container from "./Container";

const Header = () => {
	return (
		<header className="header">
			<Container classNameFromProps='container--bg'>
				<ul className="menu list-reset">
					{navLinkRoutes.map((route) => (
						<li className="menu__item" key={route.name}>
							<NavLink
								className={({ isActive }) =>
									isActive ? "menu__link menu__link--active" : "menu__link"
								}
								to={route.path}
							>
								{route.name}
							</NavLink>
						</li>
					))}
				</ul>
			</Container>
		</header>
	);
};
export default Header;
