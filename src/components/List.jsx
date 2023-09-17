import React from "react";
import { GoLinkExternal } from "react-icons/go";
import { Link } from "react-router-dom";

const List = ({ list }) => {
	return (
		<ul className="list-reset main__list list">
			{list.map((item) => (
				<li key={item.name} className="list__item">
					<Link to={item.path} className="list__link">
						{item.name}
						<GoLinkExternal className="icon" />
					</Link>
				</li>
			))}
		</ul>
	);
};

export default List;
