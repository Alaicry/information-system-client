import React from "react";
import { navLinkRoutes } from "../utils/constants/routes";
import { NavLink } from "react-router-dom";
import Container from "./Container";
import AuthModal from "./AuthModal";

const Header = () => {
	
	const [modal, openModal] = React.useState(false);



	return (
		<header className="header">
			<Container classNameFromProps="container--bg">
				<nav className="nav">
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
						<li
							className="menu__item menu__item--cursor-pointer"
							onClick={() => openModal(!modal)}
						>
							Авторизация
						</li>
					</ul>
				</nav>
				{modal && <AuthModal />}
			</Container>
		</header>
	);
};
export default Header;
